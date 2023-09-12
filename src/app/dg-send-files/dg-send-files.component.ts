import { Component } from '@angular/core';

@Component({
  selector: 'app-dg-send-files',
  templateUrl: './dg-send-files.component.html',
  styleUrls: ['./dg-send-files.component.css']
})
export class DgSendFilesComponent {
  files_uploaded: any;
  users_registered: any;
  user_id: any;
  userrole: any;
  permissionbool:boolean = false;

  currentarea:string = "dg";

  setFile:boolean = false;
  setUser:boolean = false;

  sendFile(){

    let fileoption = document.getElementById("selectfile") as HTMLInputElement;
    let useroption = document.getElementById("selectuser") as HTMLInputElement;
    let areaorigin = this.currentarea;
    let usersender = this.user_id;

    let filedataform = new FormData();

    filedataform.append("file", fileoption.value);
    filedataform.append("usersender", usersender);
    filedataform.append("usertype", useroption.value);
    filedataform.append("area", areaorigin);

    if(useroption.value == "directores" || useroption.value == "lideres" || useroption.value == "usuarios"){

      fetch('http://localhost/pdfcentral_backend/sendfileuser_multiple.php', {
        method: "POST",
        body: filedataform,
      })
      .then(res => res.json())
      .then(data => {

        //this.files_uploaded = data;

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
    else{

      fetch('http://localhost/pdfcentral_backend/sendfileuser.php', {
        method: "POST",
        body: filedataform,
      })
      .then(res => res.json())
      .then(data => {

        //this.files_uploaded = data;

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

  }

  retrieveFiles(){
    let idform = new FormData();

    idform.append("userid", this.user_id);
    idform.append("area", this.currentarea);

    fetch('http://localhost/pdfcentral_backend/retrievefiles.php', {
      method: "POST",
      body: idform,
    })
    .then(res => res.json())
    .then(data => {

      this.files_uploaded = data;

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

  retrieveUsers(){

    fetch('http://localhost/pdfcentral_backend/getusers_global.php', {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {

      this.users_registered = data;

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
    this.userrole = sessionStorage.getItem("userrole");

    if(this.userrole != 'usuario'){

      this.permissionbool = true;

    }

    this.retrieveFiles();
    this.retrieveUsers();

  }

}
