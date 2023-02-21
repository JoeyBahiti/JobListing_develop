import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { JobsCreateComponent } from './jobs-create/jobs-create.component';


@NgModule({
    imports: [
        CommonModule,
        JobsRoutingModule,
        SharedModule,
        MatGridListModule,

    ],
    declarations: [
        JobsDetailsComponent,
        JobsCreateComponent
    ]
})
export class JobsModule { }
