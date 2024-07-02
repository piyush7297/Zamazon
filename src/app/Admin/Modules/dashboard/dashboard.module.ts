import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import {NgChartsModule , NgChartsConfiguration} from 'ng2-charts'



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : DashboardComponent
      }
    ]),
    SharedModule
  ],
})
export class DashboardModule { }
