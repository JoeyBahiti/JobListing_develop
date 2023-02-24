import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { JobsService } from 'src/app/core/services/jobs.service';
import { first, map } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { JobsDetailsComponent } from '../../jobs/jobs-details/jobs-details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { JobsCreateComponent } from '../../jobs/jobs-create/jobs-create.component';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  logged_user: any;
  @Input() filled!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userId: any;
  favoriteItems: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'location', 'salary', 'action'];
  public pageSize = 4;
  public currentPage = 0;
  popupTitleJob: string = "Delete Job";
  public totalSize = 0;
  flag: boolean = true;
  public showMyMessage = false;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  jobList: any;
  dataSource: any;
  starType: any;
  stickyCol: boolean = true;
  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private jobService: JobsService,
    private titleService: Title,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    let authToken = window.localStorage.getItem('role');
    this.userId = window.localStorage.getItem('id');

    this.logged_user = authToken;
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle(' Dashboard');


    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
    this.getFilteredJobs();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getFilteredJobs() {
    const isJobSeeker = this.logged_user === 'job seekers';
    const isJobOffers = this.logged_user === 'job offers';
    const filterOptions: Record<string, any> = { page: 0, pageSize: 10, userId: isJobOffers ? this.userId : undefined };

    this.jobService.getFilteredJobs(false, 0, 10, filterOptions['userId']).subscribe(data => {
      this.jobList = data;
      const jobListContent = this.jobList?.data.content || [];
      const tempData = jobListContent.map((element: any) => ({
        id: element.job.id,
        favorite: element.favorite,
        title: element.job.title,
        description: element.job.description,
        salary: element.job.salary,
        location: element.job.location
      }));
      this.dataSource = new MatTableDataSource(tempData);
      this.dataSource.data.length = tempData.length;
      this.dataSource.paginator = this.paginator;
    });
  }


  deleteJob(id: string) {
    const message = `Are you sure you want to remove this job?`;

    const dialogData = new ConfirmDialogModel("Delete a job item!", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    this.jobService
      .deleteJob(id)
      .pipe(first())
      .subscribe({
        next: () => {
          this.getFilteredJobs();
          this.notificationService.openSnackBar('Job was deleted successfully!')
        },
        error: (error) => {
          this.notificationService.openSnackBar(error.error.message);
        },
      });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.getFilteredJobs();;
    });
  }

  startEdit(details: any | null): void {
    let dialogRef = this.dialog.open(JobsCreateComponent, {
      width: "800px",
      height: "500px",
      data: {
        id: details?.id,
        title: details?.title,
        description: details?.description,
        location: details?.location,
        salary: details?.salary,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getFilteredJobs();
    });
  }

  isFavorite(item: any): boolean {
    return this.starType;
  }
  toggleFavorite(item: any): void {
    this.starType = 'star';
    this.jobService.makeJobFavorite(item.id).subscribe(data => {
      this.getFilteredJobs();
      this.notificationService.openSnackBar('This job is now selected as favourite !')

    })

  }

}
