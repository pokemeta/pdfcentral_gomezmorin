import { Component } from '@angular/core';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  sendLogin(){

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