import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/Modules/shared/shared.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersignComponent } from './usersign/usersign.component';



@NgModule({
  declarations: [
    UserprofileComponent,
    UsersignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path  : '',
        component : UserprofileComponent
      },
      {
        path : 'signup',
        component : UsersignComponent
      }
    ]),
    SharedModule
  ]
})
export class UserModule { }
