import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Toastify from 'toastify-js';
import Swal from 'sweetalert2';

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

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      });

    });

  }

  //the function that "deletes the user"
  deactivateUser(id: any){

    Swal.fire({
      title: 'Do you want to delete the user?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {

      if (result.isConfirmed) {

        let idform = new FormData();

        idform.append("id", id);
    
        fetch(this.link.baseURL() + 'deactivateuser.php', {
          method: "POST",
          body: idform,
        })
        .then(res => res.json())
        .then(data => {
  
          this.getUsers();
  
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data
          });
    
        })
        .catch(error => {
    
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          });
    
        });

      }

    });

    /*let decision = confirm("Are you sure?");

    if(decision){

    }*/

  }

  ngOnInit(){

    this.getUsers();

  }

}
