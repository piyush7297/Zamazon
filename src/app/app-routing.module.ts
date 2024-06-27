import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildcardpageComponent } from './Public/Pages/wildcardpage/wildcardpage.component';
import { ContactComponent } from './Public/Pages/Contact/contact/contact.component';


const routes: Routes = [
  {
    path : "",
    loadChildren : ()=>import('./Public/public.module').then(m => m.PublicModule)
  },
  {
    path : "admin",
    loadChildren : ()=>import('./Admin/admin.module').then(m=> m.AdminModule)
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
