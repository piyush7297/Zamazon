import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/Public/Shared/Layout/header/header.component';
import { SubheaderComponent } from 'src/app/Public/Shared/Layout/subheader/subheader.component';
import { CartfooterComponent } from 'src/app/Public/Shared/Layout/Footer/cartfooter/cartfooter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeletedialogComponent } from '../../Layout/Dialogs/deletedialog/deletedialog.component';
import { shoppingCartReducer } from 'src/app/Public/States/Cart/cart.reducer';
import { StoreModule } from '@ngrx/store';
import { SliderComponent } from '../../Layout/slider/slider.component'
import {CarouselModule} from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    HeaderComponent,
    SubheaderComponent,
    CartfooterComponent,
    DeletedialogComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CarouselModule
  ],
  exports : [
    HeaderComponent,
    SubheaderComponent,
    CartfooterComponent,
    DeletedialogComponent,
    SliderComponent,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CarouselModule
  ],
  schemas : []
})
export class SharedModule { }
