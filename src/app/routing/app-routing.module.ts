import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RequestComponent } from '../request/request.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { TextbookInfoComponent } from '../textbook-info/textbook-info.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: WelcomeComponent},
  {path: "request", component: RequestComponent},
  {path: "catalogue/:id", component: TextbookInfoComponent},
  {path: "catalogue", component: CatalogueComponent},
  {path: "thanks", component: ThanksComponent},
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
