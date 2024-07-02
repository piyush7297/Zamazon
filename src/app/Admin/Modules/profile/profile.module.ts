import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path : "",
        component : AdminProfileComponent
      }
    ])
  ]
})
export class ProfileModule { }
