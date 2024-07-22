import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../Shared/Module/admin-shared/admin-shared.module';
import { RouterModule } from '@angular/router';
import { DispatchLoadComponent } from './dispatch-load/dispatch-load.component';
import { DispatchloaddetailComponent } from './dispatchloaddetail/dispatchloaddetail.component';



@NgModule({
  declarations: [
    DispatchLoadComponent,
    DispatchloaddetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : DispatchLoadComponent
      },
      {
        path : 'loaddetail',
        component : DispatchloaddetailComponent
      }
    ]),
    SharedModule,
  ]
})
export class DispatchModule { }
