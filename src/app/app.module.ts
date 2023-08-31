import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarpdfcentralComponent } from './sidebarpdfcentral/sidebarpdfcentral.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DgComponent } from './dg/dg.component';
import { PapComponent } from './pap/pap.component';
import { DiComponent } from './di/di.component';
import { DbComponent } from './db/db.component';
import { DgUploadComponent } from './dg-upload/dg-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarpdfcentralComponent,
    UploadfilesComponent,
    LoginComponent,
    CreateaccountComponent,
    DgComponent,
    PapComponent,
    DiComponent,
    DbComponent,
    DgUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
