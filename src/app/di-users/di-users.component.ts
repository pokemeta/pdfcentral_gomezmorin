import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-di-users',
  templateUrl: './di-users.component.html',
  styleUrls: ['./di-users.component.css']
})
export class DiUsersComponent {
  currentarea:string = "DI";

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
