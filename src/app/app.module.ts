import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RequestComponent } from './request/request.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';
import { ThanksComponent } from './thanks/thanks.component';
import { TextbookInfoComponent } from './textbook-info/textbook-info.component';

import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LendbookComponent } from './lendbook/lendbook.component';


const oktaConfig = {
  issuer: 'https://dev-634171.okta.com/oauth2/default',
  clientId: '0oaa5uvi8EhfSl40x4x6',
  redirectUri: 'http://localhost:4200/callback',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestComponent,
    CatalogueComponent,
    ThanksComponent,
    TextbookInfoComponent,
    LoginComponent,
    AdminPanelComponent,
    LendbookComponent,
 
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OktaAuthModule,
    
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

