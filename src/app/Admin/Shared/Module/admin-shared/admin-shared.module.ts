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
import { ChartComponent } from 'src/app/Admin/Modules/dashboard/chart/chart.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminSubheaderComponent,
    PaginatorfooterComponent,
    DarkmodeComponent,
    ChartComponent,
    AdminFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    NgChartsModule,
  ],
  exports : [
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminSubheaderComponent,
    PaginatorfooterComponent,
    DarkmodeComponent,
    ChartComponent,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    AdminFilterComponent
  ],
  providers : [
    { provide: NgChartsConfiguration , useValue : {generateColors : false} }
  ]
})
export class SharedModule { }
