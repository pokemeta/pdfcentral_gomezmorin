import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-dg-send-files',
  templateUrl: './dg-send-files.component.html',
  styleUrls: ['./dg-send-files.component.css']
})
export class DgSendFilesComponent {
  //these are for what's already uploaded
  files_uploaded: any;
  users_registered: any;
  //the variables that will be sent along with id and area
  user_id: any;
  userrole: any;

  permissionbool:boolean = false;

  currentarea:string = "dg";

  //these are only to set the view of each element
  setFile:boolean = false;
  setUser:boolean = false;

  constructor(public link: AppComponent){}

  sendFile(){

    //the variables to get them ready to send
    let fileoption = document.getElementById("selectfile") as HTMLInputElement;
    let useroption = document.getElementById("selectuser") as HTMLInputElement;
    let areaorigin = this.currentarea;
    let usersender = this.user_id;


    /*
    
      What this does is that, if a type of users was chosen, it will
      call the multiple php file that handles to send the selected
      pdf file to all the users of said type.

      but if a specific user was chosen, the it'll call for the general
      user send file php.

    */

    if(useroption.value == "directores" || useroption.value == "lideres" || useroption.value == "usuarios"){

      let filedataform = new FormData();

      filedataform.append("file", fileoption.value);
      filedataform.append("usersender", usersender);
      filedataform.append("usertype", useroption.value);
      filedataform.append("area", areaorigin);

      fetch(this.link.baseURL() + 'sendfileuser_multiple.php', {
        method: "POST",
        body: filedataform,
      })
      .then(res => res.json())
      .then(data => {

        //this.files_uploaded = data;

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
    else{

      let filedataform = new FormData();

      filedataform.append("file", fileoption.value);
      filedataform.append("usersender", usersender);
      filedataform.append("user", useroption.value);
      filedataform.append("area", areaorigin);

      fetch(this.link.baseURL() + 'sendfileuser.php', {
        method: "POST",
        body: filedataform,
      })
      .then(res => res.json())
      .then(data => {

        //this.files_uploaded = data;

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

  }

  //gets the files of the area that are uploaded
  retrieveFiles(){
    let idform = new FormData();

    idform.append("userid", this.user_id);
    idform.append("area", this.currentarea);

    fetch(this.link.baseURL() + 'retrievefiles.php', {
      method: "POST",
      body: idform,
    })
    .then(res => res.json())
    .then(data => {

      this.files_uploaded = data;

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

  //gets the users of the area avalaible
  retrieveUsers(){

    fetch(this.link.baseURL() + 'getusers_global.php', {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {

      this.users_registered = data;

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
    this.userrole = sessionStorage.getItem("userrole");

    if(this.userrole != 'usuario'){

      this.permissionbool = true;

    }

    this.retrieveFiles();
    this.retrieveUsers();

  }

}
