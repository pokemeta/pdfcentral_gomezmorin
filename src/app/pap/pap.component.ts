import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pap',
  templateUrl: './pap.component.html',
  styleUrls: ['./pap.component.css']
})
export class PapComponent {
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
