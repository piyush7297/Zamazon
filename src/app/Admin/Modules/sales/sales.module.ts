import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path : "",
        component : SalesComponent
      }
    ])
  ]
})
export class SalesModule { }
