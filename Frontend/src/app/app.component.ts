import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-login *ngIf="isLoggedIn === false" (OnSuccessfulLogin)="OnSuccessfulLogin()"></app-login>
    
    <div id="messageContainer" *ngIf="isLoggedIn">
      <h1 id="loginMessage">Successfully identified and authenticated.</h1>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title:string = 'Identification and Authentication Failures';
  isLoggedIn: boolean = false;

  OnSuccessfulLogin() {
    this.isLoggedIn = true;
    }

  OnLogout() {
    this.isLoggedIn = false;
  }
}
