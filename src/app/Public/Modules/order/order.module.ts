import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/Modules/shared/shared.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : "",
        component : OrderComponent
      }
    ]),
    SharedModule
  ]
})
export class OrderModule { }
