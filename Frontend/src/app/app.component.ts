import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-login></app-login>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Identification and Authentication Failures';
}
