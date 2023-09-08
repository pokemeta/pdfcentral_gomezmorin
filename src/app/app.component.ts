import { Component } from '@angular/core';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdfcentral_gomezmorin';

  checkNotification(id: any){

    let idform = new FormData();

    idform.append("idnotif", id);

    fetch('http://localhost/pdfcentral_backend/readnotif.php', {
      method: "POST",
      body: idform,
    });

  }

  ngAfterViewInit(){

    window.setInterval(function() {

      if(sessionStorage.getItem("userlogged")){

        //console.log("logged in");

        let usid:any = sessionStorage.getItem("userid");

        let usidform = new FormData();

        usidform.append("id", usid);

        fetch('http://localhost/pdfcentral_backend/checknotifs.php', {
          method: "POST",
          body: usidform
        })
        .then(res => res.json())
        .then(data => {

          if(data != null){

            data.forEach(element => {

              Toastify({
                text: `new data id ${element.id} created at ${element.datetimes}`,
                duration: 3000,
                className: "text-black text-3xl",
                style: {
                  background: "yellow",
                },
              }).showToast();

              let idform = new FormData();

              idform.append("idnotif", element.id);

              fetch('http://localhost/pdfcentral_backend/readnotif.php', {
                method: "POST",
                body: idform,
              })
              .then(res => res.json())
              .then(data => {
          
                //console.log(data);
          
                /*Toastify({
                  text: data,
                  duration: 3000,
                  className: "text-black text-3xl",
                  style: {
                    background: "yellow",
                  },
                }).showToast();*/
          
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
              
            });
 
          }
  
          /*Toastify({
            text: data,
            duration: 3000,
            className: "text-black text-3xl",
            style: {
              background: "yellow",
            },
          }).showToast();*/
  
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
    
    }, 5000);

  }

  /*ngAfterViewInit(){

    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();

  }*/
}
