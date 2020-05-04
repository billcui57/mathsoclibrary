import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RequestComponent } from '../request/request.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { TextbookInfoComponent } from '../textbook-info/textbook-info.component';
import { LoginComponent } from '../login/login.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

import { LendbookComponent } from '../lendbook/lendbook.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { HistoryComponent } from '../history/history.component';
import { LendStatusComponent } from '../lend-status/lend-status.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: WelcomeComponent},
  {path: "request", component: RequestComponent},
  {path: "catalogue/:id", component: TextbookInfoComponent},
  {path: "catalogue", component: CatalogueComponent},
  {path: "thanks", component: ThanksComponent},
  {path: 'callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'lend/:id', component: LendbookComponent},
  {path: 'admin', component: AdminPanelComponent, canActivate: [ OktaAuthGuard ], data: {onAuthRequired},},
  {path: 'admin/history', component: HistoryComponent, canActivate: [ OktaAuthGuard ], data: {onAuthRequired},},
  {path: 'admin/active-lends', component: LendStatusComponent, canActivate: [ OktaAuthGuard ], data: {onAuthRequired},},
  {path: '**', component: WelcomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}