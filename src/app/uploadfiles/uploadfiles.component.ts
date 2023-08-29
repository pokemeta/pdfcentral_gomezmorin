import { Component } from '@angular/core';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent {
  cachedfiles: any;

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

  uploadFiles(){

    if(this.cachedfiles != undefined){

      for(let i = 0; i < this.cachedfiles.length; i++){

        console.log(this.cachedfiles[i]);
  
      }

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

}
