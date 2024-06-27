import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from 'src/app/Admin/Shared/Layout/Header/admin-header/admin-header.component';
import { AdminSidenavComponent } from 'src/app/Admin/Shared/Layout/admin-sidenav/admin-sidenav.component';
import { AdminSubheaderComponent } from 'src/app/Admin/Shared/Layout/admin-subheader/admin-subheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Public/Shared/Modules/material/material.module';
import { PaginatorfooterComponent } from 'src/app/Admin/Shared/Layout/Footer/paginatorfooter/paginatorfooter.component';
import { RouterModule } from '@angular/router';
import { DarkmodeComponent } from 'src/app/Public/Shared/Layout/Button/darkmode/darkmode.component';
import { AdminFilterComponent } from 'src/app/Admin/Shared/Layout/admin-filter/admin-filter.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminSubheaderComponent,
    PaginatorfooterComponent,
    DarkmodeComponent,
    AdminFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports : [
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminSubheaderComponent,
    PaginatorfooterComponent,
    DarkmodeComponent,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    AdminFilterComponent
  ]
})
export class SharedModule { }
