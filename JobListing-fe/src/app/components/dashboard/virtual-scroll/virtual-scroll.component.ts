import { Component, OnInit } from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  DATA: any = Array.from({ length: 80 }, (v, i) => ({
    id: i + 1,
    name: `Element #${i + 1}`,
  }));
  stickyCol: boolean = true;
  logged_user: any;
  jobList: any;
  userId: any;
  displayedColumns = [
    'id',
    'title',
    'salary',
    'location'

  ];

  dataSource = new TableVirtualScrollDataSource(this.DATA);
  constructor(public jobService: JobsService) { }

  ngOnInit(): void {

    this.getFilteredJobs()

  }


  getFilteredJobs() {
    const isJobSeeker = this.logged_user === 'job seekers';
    const filterOptions: Record<string, any> = { page: 0, pageSize: 10 };
    if (!isJobSeeker) {
      filterOptions['userId'] = this.userId;
    }
    this.jobService.getFilteredJobs(false, 0, 10, this.userId).subscribe((data) => {
      this.jobList = data;
      const jobListContent = isJobSeeker ? this.jobList?.data.content : this.jobList?.data.content;
      const tempData: any[] = [];
      jobListContent.forEach((element: any) => {
        tempData.push({
          id: element.job.id,
          favorite: element.favorite,
          title: element.job.title,
          description: element.job.description,
          salary: element.job.salary,
          location: element.job.location
        })
      });
      this.dataSource = new TableVirtualScrollDataSource(tempData);
    });
  }
}
