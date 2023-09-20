import { Component } from '@angular/core';
import Toastify from 'toastify-js';

/*---------------------------------------------------------------------*/
/*  
    app component is the first page that will get called when the user
    gets into the website, two important things are present here:

    -baseLink: the "global" variable that will be used in other
    typescript codes to help the fetch API calls where to make the
    server requests in order to interact with the database.

    -The notification interval: on ngAfterViewInit(), an interval will
    be set, this interval will be always working regardless of the
    current page, and what it does is that, for every X miliseconds, it
    will make fetch API call, in which it checks if there's any
    unread notifications from the database, if there are, then it will
    call ToastifyJS toasts for each notification that was unread found
    in the database.
*/
/*---------------------------------------------------------------------*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdfcentral_gomezmorin';

  baseLink:string = "http://localhost/pdfcentral_backend/";
  //baseLink:string = "http://10.63.70.117/pdfcentral_backend/"; //the link where the fetch API calls will point at

  //this function does the same as the interval,
  //it was done for mere testing purposes, it has no use in the website
  checkNotification(id: any){

    let idform = new FormData();

    idform.append("idnotif", id);

    fetch(this.baseLink + 'readnotif.php', {
      method: "POST",
      body: idform,
    });

  }

  //this will be the function called by other components
  //so they don't need to repeat the same link again and again
  baseURL(){

    return this.baseLink;

  }

  /*
    According to angular's documentation:

    ngAfterViewInit(): Respond after Angular initializes the component's views and
    child views, or the view that contains the directive.
    Called once after the first ngAfterContentChecked().

    more info here: https://angular.io/guide/lifecycle-hooks

    In short, the function is from angular's codebase, and it basically gets called
    once the view content is rendered.

  */
  ngAfterViewInit(){

    //the interval itself, see below for the time interval
    //more infor on javascript's set interval: https://www.w3schools.com/jsref/met_win_setinterval.asp
    window.setInterval(() => {

      //if the session item is set
      if(sessionStorage.getItem("userlogged")){

        //the necessary id that will be the key to tell who's notifications will be checked
        let usid:any = sessionStorage.getItem("userid"); //the user's id, set in the log in

        //FormData is created in order to organize the data that
        //will be sent through the fetch API call with POST
        let usidform = new FormData();

        //appending the value itself
        usidform.append("id", usid);

        //this calls for the notifications to check if there are any unread
        fetch(this.baseLink + 'checknotifs.php', {
          method: "POST",
          body: usidform
        })
        .then(res => res.json())
        .then(data => {

          if(data != null){

            //for each notification that was retrieved
            data.forEach(element => {

              //show the notification
              Toastify({
                text: `new data id ${element.id} created at ${element.datetimes}`,
                duration: 3000,
                className: "text-black text-3xl",
                style: {
                  background: "yellow",
                },
              }).showToast();

              //now to prepare to send that notification being read
              let idform = new FormData();

              idform.append("idnotif", element.id);

              //and this call, is to set in the database that
              //they have been read by the user
              fetch(this.baseLink + 'readnotif.php', {
                method: "POST",
                body: idform,
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
              
            });
 
          }
  
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
    
    }, 5000); //for how much time the interval will act on, this is miliseconds

  }
}
