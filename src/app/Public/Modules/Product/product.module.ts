import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Public/Shared/Modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/Public/Pages/home/home.component';
import { ProductdetailsComponent } from 'src/app/Public/Modules/Product/productdetails/productdetails.component';
import { ProductComponent } from 'src/app/Public/Modules/Product/product/product.component';
import { shoppingCartReducer } from 'src/app/Public/States/Cart/cart.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    HomeComponent,
    ProductdetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : 'products',
        component : HomeComponent
      },
      {
        path : 'productdetail/:id',
        component : ProductdetailsComponent
      }
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
