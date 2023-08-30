import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

  sendLogin(){

    let user = document.getElementById("username") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;

    if(user.value != "" && pass.value != ""){

      let userform = new FormData();

      userform.append("username", user.value);
      userform.append("password", pass.value);

      fetch('http://localhost/pdfcentral_backend/login_user.php', {
        method: "POST",
        body: userform,
      })
      .then(res => res.json())
      .then(data => {

        /*console.log(data.username);
        console.log(data.id);*/

        sessionStorage.setItem("userlogged", data.username);
        sessionStorage.setItem("userid", data.id);

        this.router.navigate(['/home']);

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