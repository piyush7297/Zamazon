import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component'
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';



@NgModule({
  declarations: [
    AddproductComponent,
    UpdateproductComponent,
    ProductlistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '' ,
        component : ProductlistComponent
      },
      {
        path : 'add' ,
        component : AddproductComponent
      },
      {
        path : 'edit/:id',
        component : UpdateproductComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
