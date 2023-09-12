import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-pap-upload',
  templateUrl: './pap-upload.component.html',
  styleUrls: ['./pap-upload.component.css']
})
export class PapUploadComponent {
  cachedfiles: any;
  user_id: any;
  files_uploaded: any;

  userrole: any;
  permissionbool:boolean = false;

  currentarea:string = "pap";

  constructor(public link: AppComponent){}

  changeBox(hovering: boolean){

    if(hovering){

      let box = document.getElementById("filebox");

      box?.classList.add("bg-sky-800");

    }
    else{

      let box = document.getElementById("filebox");

      box?.classList.remove("bg-sky-800");

    }

  }

  getFile(event: any){

    this.cachedfiles = event.target.files;

  }

  resetFiles(){

    this.cachedfiles = undefined;

  }

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

  uploadFiles(){

    if(this.cachedfiles != undefined){

      let formupload = new FormData();

      for(let i = 0; i < this.cachedfiles.length; i++){

        let singlefile = this.cachedfiles[i];

        //console.log(singlefile);

        formupload.append("pdffiles[]", singlefile);
  
      }

      formupload.append("userid", this.user_id);

      formupload.append("area", this.currentarea);

      fetch(this.link.baseURL() + 'fileupload.php', {
        method: "POST",
        body: formupload,
      })
      .then(res => res.json())
      .then(data => {

        if(typeof data == "string"){

          Toastify({
            text: data,
            duration: 3000,
            className: "text-3xl",
            style: {
              background: "green",
            },
          }).showToast();

          this.cachedfiles = undefined;

          this.retrieveFiles();

        }
        else{

          for(let i = 0; i < data.length; i++){

            //console.log(data[i].error);

            Toastify({
              text: data[i].error,
              duration: 3000,
              className: "text-3xl",
              style: {
                background: "red",
              },
            }).showToast();

          }

        }

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

      Toastify({
        text: "Upload a file!",
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();

    }

  }

  deleteFile(id: any){

    let decision = confirm("Are you sure?");

    if(decision){

      let fileidform = new FormData();

      fileidform.append("pdfid", id);
      fileidform.append("area", this.currentarea);

      fetch(this.link.baseURL() + 'deactivatefile.php', {
        method: "POST",
        body: fileidform,
      })
      .then(res => res.json())
      .then(data => {

        this.retrieveFiles();

        Toastify({
          text: data,
          duration: 3000,
          className: "text-black text-3xl",
          style: {
            background: "yellow",
          },
        }).showToast();

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

  ngOnInit(){

    this.user_id = sessionStorage.getItem("userid");
    this.userrole = sessionStorage.getItem("userrole");

    if(this.userrole != 'usuario'){

      this.permissionbool = true;

    }
    
    this.retrieveFiles();

  }

}
