import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { PapSendFilesComponent } from './pap-send-files/pap-send-files.component';
import { DiSendFilesComponent } from './di-send-files/di-send-files.component';
import { DbSendFilesComponent } from './db-send-files/db-send-files.component';

import { DgViewsentfilesComponent } from './dg-viewsentfiles/dg-viewsentfiles.component';
import { PapViewsentfilesComponent } from './pap-viewsentfiles/pap-viewsentfiles.component';
import { DiViewsentfilesComponent } from './di-viewsentfiles/di-viewsentfiles.component';
import { DbViewsentfilesComponent } from './db-viewsentfiles/db-viewsentfiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createaccount', component: CreateaccountComponent },

  { path: 'dg', component: DgComponent },
  { path: 'dg_upload', component: DgUploadComponent },
  { path: 'dg_send', component: DgSendFilesComponent },
  { path: 'dg_viewfiles', component: DgViewsentfilesComponent },
  { path: 'dg_users', component: DgUsersComponent },

  { path: 'pap', component: PapComponent },
  { path: 'pap_upload', component: PapUploadComponent },
  { path: 'pap_users', component: PapUsersComponent },
  { path: 'pap_send', component: PapSendFilesComponent },
  { path: 'pap_viewfiles', component: PapViewsentfilesComponent },

  { path: 'di', component: DiComponent },
  { path: 'di_upload', component: DiUploadComponent },
  { path: 'di_users', component: DiUsersComponent },
  { path: 'di_send', component: DiSendFilesComponent },
  { path: 'di_viewfiles', component: DiViewsentfilesComponent },

  { path: 'db', component: DbComponent },
  { path: 'db_upload', component: DbUploadComponent },
  { path: 'db_users', component: DbUsersComponent },
  { path: 'db_send', component: DbSendFilesComponent },
  { path: 'db_viewfiles', component: DbViewsentfilesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
