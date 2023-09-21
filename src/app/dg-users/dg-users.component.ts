import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-dg-users',
  templateUrl: './dg-users.component.html',
  styleUrls: ['./dg-users.component.css']
})
export class DgUsersComponent {
  currentarea:string = "DG";

  //the variable that will get the users stored.
  users: any;

  constructor(public link: AppComponent){}

  //the function that gets all the users from the area
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

  //the function that "deletes the user"
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

  }

  ngOnInit(){

    this.getUsers();

  }

}
