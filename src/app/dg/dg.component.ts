import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dg',
  templateUrl: './dg.component.html',
  styleUrls: ['./dg.component.css']
})
export class DgComponent {
  //most of these variables are set for more readability in the conditionals
  //of ngOnInit()
  usernamesession: any;
  userrole: any;

  //however, permissionbool is what's used in the html view in order to check if
  //the logged user is anything else than user
  //if not, the administrate users options won't show
  permissionbool:boolean = false;

  constructor(private router: Router){}

  ngOnInit(){

    this.usernamesession = sessionStorage.getItem("userlogged");
    this.userrole = sessionStorage.getItem("userrole");

    //the check then sets to true if it's lider or director
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
