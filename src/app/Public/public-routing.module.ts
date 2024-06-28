import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicComponent } from "./public.component";



const routes : Routes = [
  {
    path : "",
    component : PublicComponent,
    children : [
      {
        path : "",
        redirectTo : "products",
        pathMatch : "full",
      },
      {
        path : "",
        loadChildren : ()=>import('./Modules/Product/product.module').then(m => m.ProductModule)
      },
      {
        path : "cart",
        loadChildren : ()=>import('./Modules/Cart/cart.module').then(m => m.CartModule)
      },
      {
        path : "profile",
        loadChildren : ()=>import('./Modules/User/user.module').then(m=> m.UserModule)
      },
      {
        path : "order/:id",
        loadChildren : ()=>import('./Modules/order/order.module').then(m=> m.OrderModule)
      },
    ]
  }
]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class PublicRoutingModule {}
