import { Component } from '@angular/core';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-dg-users',
  templateUrl: './dg-users.component.html',
  styleUrls: ['./dg-users.component.css']
})
export class DgUsersComponent {
  currentarea:string = "DG";

  users: any;

  getUsers(){

    let usersform = new FormData();

    usersform.append("area", this.currentarea);

    fetch('http://localhost/pdfcentral_backend/geusers.php', {
      method: "POST",
      body: usersform,
    })
    .then(res => res.json())
    .then(data => {

      this.users = data;

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

  deactivateUser(id: any){

    let decision = confirm("Are you sure?");

    if(decision){

      let idform = new FormData();

      idform.append("id", id);
  
      fetch('http://localhost/pdfcentral_backend/deactivateuser.php', {
        method: "POST",
        body: idform,
      })
      .then(res => res.json())
      .then(data => {

        this.getUsers();
  
        Toastify({
          text: data,
          duration: 3000,
          className: "text-3xl text-black",
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

    this.getUsers();

  }

}
