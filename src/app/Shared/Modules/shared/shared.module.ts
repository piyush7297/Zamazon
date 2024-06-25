import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/Shared/Layout/header/header.component';
import { SubheaderComponent } from 'src/app/Shared/Layout/subheader/subheader.component';
import { CartfooterComponent } from 'src/app/Shared/Layout/Footer/cartfooter/cartfooter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeletedialogComponent } from '../../Layout/Dialogs/deletedialog/deletedialog.component';
import { shoppingCartReducer } from 'src/app/States/Cart/cart.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    HeaderComponent,
    SubheaderComponent,
    CartfooterComponent,
    DeletedialogComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports : [
    HeaderComponent,
    SubheaderComponent,
    CartfooterComponent,
    DeletedialogComponent,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
