import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-dg-viewsentfiles',
  templateUrl: './dg-viewsentfiles.component.html',
  styleUrls: ['./dg-viewsentfiles.component.css']
})
export class DgViewsentfilesComponent {
  /*
  
    this is only to see the files, so the following
    variables store all the files that were sent
    to the user that is logged in.

    It is determined with user_id.
  
  */

  user_id: any;
  user_sent_files_dg: any;
  user_sent_files_pap: any;
  user_sent_files_di: any;
  user_sent_files_db: any;

  constructor(public link: AppComponent){}

  //When the file is clicked to view
  //this function gets called
  setViewed(id: any){

    let idform = new FormData();

    idform.append("id", id);

    fetch(this.link.baseURL() + 'userset_check.php', {
      method: "POST",
      body: idform,
    })
    .then(res => res.json())
    .then(data => {

    })
    .catch(error => {

      Toastify({
        text: error,
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();

    });

  }

  //And when the user explicitally clicks the
  //button, this gets called
  setChecked(id: any){

    let idform = new FormData();

    idform.append("id", id);

    fetch(this.link.baseURL() + 'userset_check_definitive.php', {
      method: "POST",
      body: idform,
    })
    .then(res => res.json())
    .then(data => {

    })
    .catch(error => {

      Toastify({
        text: error,
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();

    });

  }

  //the functions that get the files sent to
  //the user
  retrieveFilesUser(){

    let idform = new FormData();

    idform.append("id", this.user_id);

    fetch(this.link.baseURL() + 'sent_files_retrieve.php', {
      method: "POST",
      body: idform,
    })
    .then(res => res.json())
    .then(data => {

      this.user_sent_files_dg = data[0].dg_res;
      this.user_sent_files_pap = data[0].pap_res;
      this.user_sent_files_di = data[0].di_res;
      this.user_sent_files_db = data[0].db_res;

    })
    .catch(error => {

      Toastify({
        text: error,
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();

    });

  }

  ngOnInit(){

    this.user_id = sessionStorage.getItem("userid");
    this.retrieveFilesUser();

  }

}
