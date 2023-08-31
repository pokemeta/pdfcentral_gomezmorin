import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent {

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
