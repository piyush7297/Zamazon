import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component'
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductdetailComponent } from './productdetail/productdetail.component';



@NgModule({
  declarations: [
    AddproductComponent,
    UpdateproductComponent,
    ProductlistComponent,
    ProductdetailComponent,
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
    SharedModule,
    FileUploadModule
  ]
})
export class ProductModule { }
