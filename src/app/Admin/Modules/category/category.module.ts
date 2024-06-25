import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatedialogComponent } from './updatecategory/updatedialog.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';


@NgModule({
  declarations: [
    AddcategoryComponent,
    UpdatedialogComponent,
    CategorylistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : CategorylistComponent
      }
    ]),
    SharedModule
  ]
})
export class CategoryModule { }
