import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarpdfcentral',
  templateUrl: './sidebarpdfcentral.component.html',
  styleUrls: ['./sidebarpdfcentral.component.css']
})
export class SidebarpdfcentralComponent {

  constructor(private router: Router){}

  destroySession(){

    sessionStorage.clear();

    this.router.navigate(['/login']);

  }

}
