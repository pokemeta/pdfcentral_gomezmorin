import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dg-upload',
  templateUrl: './dg-upload.component.html',
  styleUrls: ['./dg-upload.component.css']
})
export class DgUploadComponent {

  /*
  
    So this view has the file upload section and it is an important feature.
    It is also the most complex component:

    user_id, currentarea and files_uploaded are the variables that will be sent
    to the backend.

    userrole determines whether the user is a lider or director, if not, then
    it's not gonna be able to upload files with the permissionbool.
  
  */

  cachedfiles: any;
  user_id: any;
  files_uploaded: any;

  userrole: any;
  permissionbool:boolean = false;

  currentarea:string = "dg";

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

  /*

    this function gets called when the drag and drop
    area gets the files uploaded, but not ready on the
    server yet.

    it stores the files into the variable to process later.

  */
  getFile(event: any){

    this.cachedfiles = event.target.files;

  }

  resetFiles(){

    this.cachedfiles = undefined;

  }

  //This function is the responsible to
  //get the files that are already uploaded
  //to the server
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

      //this is the variable that sets the data on the view
      this.files_uploaded = data;

    })
    .catch(error => {

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      });

    });


  }

  uploadFiles(){

    if(this.cachedfiles != undefined){

      let formupload = new FormData();

      //what follows is the appending of each file onto formdata
      for(let i = 0; i < this.cachedfiles.length; i++){

        let singlefile = this.cachedfiles[i];

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

        //if the response is a string
        if(typeof data == "string"){

          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data
          });

          this.cachedfiles = undefined;

          this.retrieveFiles();

        }
        else{

          //if either file has an error, it'll
          //be displayed here
          for(let i = 0; i < data.length; i++){

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

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        });

      });

    }
    else{

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Upload a file!'
      });

    }

  }

  //this is the function to delete the file
  deleteFile(id: any){

    Swal.fire({
      title: 'Do you want to delete the file?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {

      if (result.isConfirmed) {

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
  
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          });
  
        });

      }

    });

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
