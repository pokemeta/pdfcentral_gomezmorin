import { Component } from '@angular/core';

@Component({
  selector: 'app-dg-viewsentfiles',
  templateUrl: './dg-viewsentfiles.component.html',
  styleUrls: ['./dg-viewsentfiles.component.css']
})
export class DgViewsentfilesComponent {
  user_id: any;
  user_sent_files: any;

  setViewed(id: any){

    let idform = new FormData();

    idform.append("id", id);

    fetch('http://localhost/pdfcentral_backend/userset_check.php', {
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

    fetch('http://localhost/pdfcentral_backend/userset_check_definitive.php', {
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

    fetch('http://localhost/pdfcentral_backend/sent_files_retrieve.php', {
      method: "POST",
      body: idform,
    })
    .then(res => res.json())
    .then(data => {

      this.user_sent_files = data;
      console.log(this.user_sent_files);

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
