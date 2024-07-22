import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";




const routes : Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        loadChildren : ()=>import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path : "login",
        loadChildren : ()=> import('./Modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path : "product",
        loadChildren : ()=>import('./Modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path : "category",
        loadChildren : ()=>import('./Modules/category/category.module').then(m => m.CategoryModule)
      },
      {
        path : "sales",
        loadChildren : ()=>import('./Modules/sales/sales.module').then(m => m.SalesModule)
      },
      {
        path : "settings",
        loadChildren : ()=>import('./Modules/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path : "customers",
        loadChildren : ()=>import('./Modules/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path : "profile",
        loadChildren : ()=> import('./Modules/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path : "dispatch",
        loadChildren : ()=> import('./Modules/dispatch/dispatch.module').then(m => m.DispatchModule)
      }
    ]
  }
]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AdminRoutingModule {}
