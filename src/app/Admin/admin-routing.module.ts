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
        path : "product",
        loadChildren : ()=>import('./Modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path : "category",
        loadChildren : ()=>import('./Modules/category/category.module').then(m => m.CategoryModule)
      },
      {
        path : "settings",
        loadChildren : ()=>import('./Modules/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path : "customers",
        loadChildren : ()=>import('./Modules/customer/customer.module').then(m => m.CustomerModule)
      }
    ]
  }
]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AdminRoutingModule {}
