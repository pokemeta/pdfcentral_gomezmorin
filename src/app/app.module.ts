import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarpdfcentralComponent } from './sidebarpdfcentral/sidebarpdfcentral.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarpdfcentralComponent,
    UploadfilesComponent,
    LoginComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
