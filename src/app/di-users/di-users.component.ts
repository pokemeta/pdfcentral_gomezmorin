import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import Swal from 'sweetalert2';

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

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      });

    });

  }

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

  }

  ngOnInit(){

    this.getUsers();

  }
}
