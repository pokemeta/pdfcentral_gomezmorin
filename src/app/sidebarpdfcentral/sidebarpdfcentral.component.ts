import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebarpdfcentral',
  templateUrl: './sidebarpdfcentral.component.html',
  styleUrls: ['./sidebarpdfcentral.component.css']
})
export class SidebarpdfcentralComponent {

  destroySession(){

    sessionStorage.clear();

    location.reload();

  }

}
