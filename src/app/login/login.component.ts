import { Component } from '@angular/core';
//router is used to redirect the user to the respective page of their area
import { Router } from '@angular/router';
//we'll retrieve the baselink variable from here
import { AppComponent } from '../app.component';
//Toastify is imported here to make the necessary error calls
import Toastify from 'toastify-js';
//Sweetalert is only used for single error calls
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //this is done in order to be able to use router and the baselink stuff
  constructor(private router: Router, private link: AppComponent){}

  sendLogin(){

    //we get the values of the inputs
    let user = document.getElementById("username") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;

    //if the fields are not empty
    if(user.value != "" && pass.value != ""){

      //we create and append the values to the form data
      let userform = new FormData();

      userform.append("username", user.value);
      userform.append("password", pass.value);

      //and we make the call to the php file set for it
      fetch(this.link.baseURL() + 'login_user.php', {
        method: "POST",
        body: userform,
      })
      .then(res => res.json())
      .then(data => {

        /*
        
          I'm gonna detail this a bit further:
          login_user.php works in the way that if there are no
          errors, it will return an object, in this case, all the
          data of the user that was just sent in the login.
          But if the login fails, it will throw an "INVALID USER"
          error, making this a string instead of an object, hence
          why there's a toast with the data as text, because it
          displays the error the server sent as a result.
        
        */

        if(typeof data == "object"){

          //these will work across the website, so it's important to
          //set these as the session, they're crucial for most
          //fetch API calls
          sessionStorage.setItem("userlogged", data.username);
          sessionStorage.setItem("userid", data.id);
          sessionStorage.setItem("userrole", data.rol);

          //Depending on what area was the user assigned to
          //it's where they will get sent to

          if(data.rol == "root"){

            this.router.navigate(['/root_panel']);

          }
          else{

            switch(data.area){

              case "DG":
                this.router.navigate(['/dg']);
                break;
              case "PAP":
                this.router.navigate(['/pap']);
                break;
              case "DI":
                this.router.navigate(['/di']);
                break;
              case "DB":
                this.router.navigate(['/db']);
                break;
    
            }

          }

        }
        else{

          //the INVALID USER error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data
          });

        }

      })
      .catch(error => {

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        });

      });
    
    }
    //in case one of the fields is empty
    else{

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'One of the fields is empty'
      });

    }

  }

}