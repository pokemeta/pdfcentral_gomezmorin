import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarpdfcentral',
  templateUrl: './sidebarpdfcentral.component.html',
  styleUrls: ['./sidebarpdfcentral.component.css']
})
export class SidebarpdfcentralComponent {
  userrole: any;
  area_user: any;
  permissionbool:boolean = false;

  constructor(private router: Router){}

  main_location(){

    this.router.navigate([`/${this.area_user}`]);

  }

  upload_location(){

    this.router.navigate([`/${this.area_user}_upload`]);

  }

  send_location(){

    this.router.navigate([`/${this.area_user}_send`]);

  }

  viewfiles_location(){

    this.router.navigate([`/${this.area_user}_viewfiles`]);

  }

  users_location(){

    this.router.navigate([`/${this.area_user}_users`]);

  }

  change_area(set_area: string){

    sessionStorage.setItem("userarea", set_area);

    this.setStuff();

    this.router.navigate([`/${set_area}`]);

  }

  destroySession(){

    sessionStorage.clear();

    this.router.navigate(['/login']);

  }

  setStuff(){

    this.area_user = sessionStorage.getItem("userarea");
    this.userrole = sessionStorage.getItem("userrole");

    if(this.userrole != 'usuario'){

      this.permissionbool = true;

    }

  }

  ngOnInit(){

    this.setStuff();

  }

}
