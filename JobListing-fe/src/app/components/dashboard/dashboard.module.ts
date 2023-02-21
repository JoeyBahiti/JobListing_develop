import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [DashboardHomeComponent, VirtualScrollComponent],
    imports: [

        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        MatIconModule,
        MatPaginatorModule,
        TableVirtualScrollModule,
        ScrollingModule,
        MatSlideToggleModule,
        MatTableModule,
    ]
})
export class DashboardModule { }
