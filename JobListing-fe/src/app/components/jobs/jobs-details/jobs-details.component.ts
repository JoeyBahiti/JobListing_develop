import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent implements OnInit {
  jobDetailsForm: FormGroup;
  jobId: any;
  breakpoint = 2;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public jobService: JobsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<JobsDetailsComponent>,
  ) {
    this.jobDetailsForm = fb.group({
      id: [''],
      title: [''],
      location: [''],
      description: [''],
      author: [''],
      salary: [''],
    });
  }

  ngOnInit(): void {
    this.jobId = this.data.id;
    this.jobService.getJobDetails(this.jobId)?.subscribe(({ data }) => {
      const { title, location, description, user, salary } = data;
      this.jobDetailsForm.patchValue({
        title,
        location,
        description,
        author: user.username,
        salary,
      });
    });
  }

  onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }
}
