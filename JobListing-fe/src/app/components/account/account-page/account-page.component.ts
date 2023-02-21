import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { JobsService } from 'src/app/core/services/jobs.service';
import { JobsCreateComponent } from '../../jobs/jobs-create/jobs-create.component';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit, AfterViewInit {

  dataSource1 = new MatTableDataSource([]);
  dataSource2 = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['title', 'description', 'location', 'salary', 'action'];
  displayedColumns2: string[] = ['title', 'description', 'location', 'salary', 'action'];
  appliedJobsList: any;
  favoriteJobsList: any;
  logged_user: any | null;
  userDetails: any;

  constructor(
    private titleService: Title,
    public jobService: JobsService,
    public dialog: MatDialog,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Profile');
    this.getJobApplications();
    this.getListOfFavoriteJobs();
    let authToken = window.localStorage.getItem('role');
    this.logged_user = authToken;
    this.getUserDetails();
  }

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator;
  }


  getUserDetails() {
    this.authService.getUserDetails().subscribe(data => {
      this.userDetails = data.data;
      console.log(this.userDetails)
    })
  }
  getJobApplications() {
    this.jobService.getAppliedJobs().subscribe(data => {
      this.appliedJobsList = data;
      this.dataSource1.data = this.appliedJobsList.data;
      this.dataSource1.data.length = this.appliedJobsList.data.length; this.dataSource1.paginator = this.paginator;
    });
  }

  getListOfFavoriteJobs() {
    this.jobService.getFavoriteJobs().subscribe(data => {
      this.favoriteJobsList = data;
      this.dataSource2.data = this.favoriteJobsList.data;
      this.dataSource2.data.length = this.favoriteJobsList.data.length; this.dataSource2.paginator = this.paginator;
    });
  }

  startEdit(details: any | null): void {
    console.log(details)
    let dialogRef = this.dialog.open(JobsCreateComponent, {
      width: "800px",
      height: "600px",
      data: {
        id: details?.id,
        title: details?.title,
        description: details?.description,
        location: details?.location,
        salary: details?.salary,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getJobApplications();
    });
  }

}
