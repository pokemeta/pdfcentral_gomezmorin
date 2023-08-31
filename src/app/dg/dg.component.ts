import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dg',
  templateUrl: './dg.component.html',
  styleUrls: ['./dg.component.css']
})
export class DgComponent {
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
