import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerComponent
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
