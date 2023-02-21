import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {
  jobForm!: FormGroup;
  logged_user: any;
  breakpoint = 2;
  jobData: any;
  showEditMode = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public jobService: JobsService,
    public dialogRef: MatDialogRef<JobsCreateComponent>
  ) { }

  ngOnInit(): void {
    let authToken = window.localStorage.getItem('role');
    this.logged_user = authToken;

    this.jobForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      location: [null],
      description: ['', Validators.required],
      salary: [null],
    });

    if (this.data.id != null) {
      this.patchJobValues();
    }
  }

  patchJobValues() {
    this.jobData = this.data;
    this.showEditMode = true;
    this.jobForm.patchValue(this.jobData);
  }

  saveJob() {
    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      return;
    }

    this.showEditMode = false;
    const { title, location, description, salary } = this.jobForm.value;
    const payload: any = { title, location, description, salary };

    const apiCall = this.data.id
      ? this.jobService.updateJob({ id: this.data.id, ...payload })
      : this.jobService.createJob(payload);

    apiCall.pipe(first()).subscribe({
      next: () => {
        const message = this.data.id
          ? 'Job is modified successfully!'
          : 'Job is created successfully!';

        this.dialogRef.close();
      },
      error: (error) => {

      }
    });
  }

  onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
