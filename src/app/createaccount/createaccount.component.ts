import { Component } from '@angular/core';
import Toastify from 'toastify-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  constructor(private router: Router){}

  sendAccount(){

    let user = document.getElementById("username") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;

    if(user.value != "" && pass.value != ""){

      let userform = new FormData();

      userform.append("username", user.value);
      userform.append("password", pass.value);

      fetch('http://localhost/pdfcentral_backend/create_user.php', {
        method: "POST",
        body: userform,
      })
      .then(res => res.json())
      .then(data => {

        this.router.navigate(['/login']);

        //console.log(data);

        /*Toastify({
          text: data,
          duration: 3000,
          className: "text-3xl",
          style: {
            background: "green",
          },
        }).showToast();*/

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
