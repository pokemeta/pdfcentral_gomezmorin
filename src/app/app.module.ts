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
import { PapUploadComponent } from './pap-upload/pap-upload.component';
import { DiUploadComponent } from './di-upload/di-upload.component';
import { DbUploadComponent } from './db-upload/db-upload.component';
import { DgUsersComponent } from './dg-users/dg-users.component';
import { PapUsersComponent } from './pap-users/pap-users.component';
import { DiUsersComponent } from './di-users/di-users.component';
import { DbUsersComponent } from './db-users/db-users.component';
import { DgSendFilesComponent } from './dg-send-files/dg-send-files.component';
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
    DgUploadComponent,
    PapUploadComponent,
    DiUploadComponent,
    DbUploadComponent,
    DgUsersComponent,
    PapUsersComponent,
    DiUsersComponent,
    DbUsersComponent,
    DgSendFilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
