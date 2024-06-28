import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { ChartComponent } from './chart/chart.component';
import {NgChartsModule , NgChartsConfiguration} from 'ng2-charts'



@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild([
      {
        path : '',
        component : DashboardComponent
      }
    ]),
    SharedModule
  ],
  providers : [
    { provide: NgChartsConfiguration , useValue : {generateColors : false} }
  ]
})
export class DashboardModule { }
