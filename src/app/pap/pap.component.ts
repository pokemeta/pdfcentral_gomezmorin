import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pap',
  templateUrl: './pap.component.html',
  styleUrls: ['./pap.component.css']
})
export class PapComponent {
  usernamesession: any;
  userrole: any;
  permissionbool:boolean = false;

  constructor(private router: Router){}

  ngOnInit(){

    this.usernamesession = sessionStorage.getItem("userlogged");
    this.userrole = sessionStorage.getItem("userrole");

    if(this.userrole != 'usuario'){

      this.permissionbool = true;

    }

    if(this.usernamesession){



    }
    else{

      this.router.navigate(['login']);

    }

  }

}
