import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-di-viewsentfiles',
  templateUrl: './di-viewsentfiles.component.html',
  styleUrls: ['./di-viewsentfiles.component.css']
})
export class DiViewsentfilesComponent {
  user_id: any;
  user_sent_files_dg: any;
  user_sent_files_pap: any;
  user_sent_files_di: any;
  user_sent_files_db: any;

  constructor(public link: AppComponent){}

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

      /*Toastify({
        text: error,
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();*/

    });

  }

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

      /*Toastify({
        text: error,
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();*/

    });

  }

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
      /*console.log(data[0].dg_res);
      console.log(data[0].pap_res);
      console.log(data[0].di_res);
      console.log(data[0].db_res);*/

    })
    .catch(error => {

      /*Toastify({
        text: error,
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();*/

    });

  }

  ngOnInit(){

    this.user_id = sessionStorage.getItem("userid");
    this.retrieveFilesUser();

  }

}
