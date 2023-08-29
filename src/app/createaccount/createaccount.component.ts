import { Component } from '@angular/core';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  sendAccount(){

    let user = document.getElementById("username") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;

    if(user.value != "" && pass.value != ""){


    
    }
    else{

      Toastify({
        text: "One of the fields is empty",
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "red",
        },
      }).showToast();

    }

  }

}
