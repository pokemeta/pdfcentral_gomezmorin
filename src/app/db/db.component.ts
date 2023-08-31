import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent {
  usernamesession: any;

  constructor(private router: Router){}

  ngOnInit(){

    this.usernamesession = sessionStorage.getItem("userlogged");

    if(this.usernamesession){



    }
    else{

      this.router.navigate(['login']);

    }

  }
  
}
