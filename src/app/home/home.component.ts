import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
