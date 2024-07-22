import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customerlist/customer.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { RouterModule } from '@angular/router';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerdetailComponent,
    AddcustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : CustomerComponent
      }
    ]),
    SharedModule
  ]
})
export class CustomerModule { }
