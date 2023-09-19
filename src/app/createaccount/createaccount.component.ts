import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  constructor(private router: Router, public link: AppComponent){}

  sendAccount(){

    let user = document.getElementById("username") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;
    let userarea = document.getElementById("area") as HTMLInputElement;

    if(user.value != "" && pass.value != "" && userarea.value != "NULL"){

      let userform = new FormData();

      userform.append("username", user.value);
      userform.append("password", pass.value);
      userform.append("area", userarea.value);

      fetch(this.link.baseURL() + 'create_user.php', {
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
