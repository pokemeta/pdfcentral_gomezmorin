import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-db-users',
  templateUrl: './db-users.component.html',
  styleUrls: ['./db-users.component.css']
})
export class DbUsersComponent {
  currentarea:string = "DB";

  users: any;

  constructor(public link: AppComponent){}

  getUsers(){

    let usersform = new FormData();

    usersform.append("area", this.currentarea);

    fetch(this.link.baseURL() + 'geusers.php', {
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
  
      fetch(this.link.baseURL() + 'deactivateuser.php', {
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
