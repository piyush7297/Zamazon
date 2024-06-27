import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Public/Pipes/filter.pipe';
import { WildcardpageComponent } from './Public/Pages/wildcardpage/wildcardpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Public/Shared/Modules/material/material.module';
import { ContactComponent } from './Public/Pages/Contact/contact/contact.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule}from '@ngxs/devtools-plugin'
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin'
import { productState } from './Admin/Store/Product/product.state';
import { PublicComponent } from './Public/public.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    WildcardpageComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([productState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    // StoreModule.forRoot({counter : counterReducer , shoppingCart : shoppingCartReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
