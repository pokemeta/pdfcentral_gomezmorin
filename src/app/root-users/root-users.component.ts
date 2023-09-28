import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
//Location will be used to set the user back
import { Location } from '@angular/common';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-root-users',
  templateUrl: './root-users.component.html',
  styleUrls: ['./root-users.component.css']
})
export class RootUsersComponent {
  userrole: any;
  users: any;

  constructor(private location: Location, private link: AppComponent){}

  /*

    This will be called when the role gets changed.
    The event from the (change) call is used in order
    to determine the specific element that was changed
    to send the new role value.

  */
  updateUserRole(userid, event){

    let roleform = new FormData();

    roleform.append("id", userid);
    roleform.append("rol", event.target.value);

    fetch(this.link.baseURL() + 'update_roles.php', {
      method: "POST",
      body: roleform,
    })
    .then(() => {

      Toastify({
        text: "User's role was changed",
        duration: 3000,
        className: "text-3xl",
        style: {
          background: "green",
        },
      }).showToast();

      this.retrieveUsers();

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

  retrieveUsers(){

    fetch(this.link.baseURL() + 'getusers_global_root.php', {
      method: "GET"
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

  ngOnInit(){

    this.userrole = sessionStorage.getItem("userrole");

    //this check makes sure the user is root, otherwise they will go back to where they were
    if(this.userrole != 'root'){

      this.location.back();

    }

    this.retrieveUsers();

  }

}
