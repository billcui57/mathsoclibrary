import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RequestComponent } from '../request/request.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ThanksComponent } from '../thanks/thanks.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: WelcomeComponent},
  {path: "request", component: RequestComponent},
  {path: "catalogue", component: CatalogueComponent},
  {path: "thanks", component: ThanksComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
