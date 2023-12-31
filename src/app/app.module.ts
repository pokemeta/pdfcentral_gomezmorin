import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarpdfcentralComponent } from './sidebarpdfcentral/sidebarpdfcentral.component';
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
import { DgViewsentfilesComponent } from './dg-viewsentfiles/dg-viewsentfiles.component';
import { PapSendFilesComponent } from './pap-send-files/pap-send-files.component';
import { PapViewsentfilesComponent } from './pap-viewsentfiles/pap-viewsentfiles.component';
import { DiSendFilesComponent } from './di-send-files/di-send-files.component';
import { DiViewsentfilesComponent } from './di-viewsentfiles/di-viewsentfiles.component';
import { DbSendFilesComponent } from './db-send-files/db-send-files.component';
import { DbViewsentfilesComponent } from './db-viewsentfiles/db-viewsentfiles.component';
import { RootUsersComponent } from './root-users/root-users.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarpdfcentralComponent,
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
    DgViewsentfilesComponent,
    PapSendFilesComponent,
    PapViewsentfilesComponent,
    DiSendFilesComponent,
    DiViewsentfilesComponent,
    DbSendFilesComponent,
    DbViewsentfilesComponent,
    RootUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
