import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildcardpageComponent } from './Pages/wildcardpage/wildcardpage.component';
import { ContactComponent } from './Pages/Contact/contact/contact.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path : 'contact-us',
    component : ContactComponent
  },
  {
    path : '',
    loadChildren : ()=> import('./Modules/Product/product.module').then(m => m.ProductModule)
  },
  {
    path : 'cart',
    loadChildren : ()=> import('./Modules/Cart/cart.module').then(m => m.CartModule)
  },
  {
    path : 'profile',
    loadChildren : ()=> import('./Modules/User/user.module').then(m => m.UserModule)
  },
  {
    path : 'admin',
    loadChildren : ()=> import('./Admin/Modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : 'admin/product',
    loadChildren : ()=> import('./Admin/Modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path : 'admin/category',
    loadChildren : ()=> import('./Admin/Modules/category/category.module').then(m =>  m.CategoryModule)
  },
  {
    path : 'admin/settings',
    loadChildren : ()=> import('./Admin/Modules/settings/settings.module').then(m =>  m.SettingsModule)
  },
  {
    path : '**',
    component : WildcardpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
