import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'uploadfiles', component: UploadfilesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'dg', component: DgComponent },
  { path: 'dg_upload', component: DgUploadComponent },
  { path: 'dg_send', component: DgSendFilesComponent },
  { path: 'dg_users', component: DgUsersComponent },
  { path: 'pap', component: PapComponent },
  { path: 'pap_upload', component: PapUploadComponent },
  { path: 'pap_users', component: PapUsersComponent },
  { path: 'di', component: DiComponent },
  { path: 'di_upload', component: DiUploadComponent },
  { path: 'di_users', component: DiUsersComponent },
  { path: 'db', component: DbComponent },
  { path: 'db_upload', component: DbUploadComponent },
  { path: 'db_users', component: DbUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
