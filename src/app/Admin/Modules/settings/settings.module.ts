import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { SettingsComponent } from './settings/settings.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : SettingsComponent
      }
    ]),
    SharedModule
  ]
})
export class SettingsModule { }
