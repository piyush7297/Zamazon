import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Public/Shared/Modules/shared/shared.module';
import { CartComponent } from 'src/app/Public/Modules/Cart/cart/cart.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : CartComponent
      }
    ]),
    SharedModule,
  ]
})
export class CartModule { }
