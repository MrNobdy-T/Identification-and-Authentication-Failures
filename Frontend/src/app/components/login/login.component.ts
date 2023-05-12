import { Component, EventEmitter, Output } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  template: `
<div class="h-100 d-flex align-items-center justify-content-center">
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h3 class="card-title text-center mb-5 fw-light fs-3"><b>Identify yourself!</b></h3>
            <form>

              <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <div class="form-floating">
                  <input type="text" class="form-control" id="username" name="username" placeholder="Username" [(ngModel)]="credentials.username" required>
                  <label for="username">Username</label>
                </div>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-lock"></i></span>
                <div class="form-floating">
                  <input type="password" class="form-control" id="password" name="password" placeholder="Password" [(ngModel)]="credentials.password" required>
                  <label for="password">Password</label>
                </div>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="rememberPassword" [(ngModel)]="rememberPassword" id="rememberPassword">
                <label class="form-check-label" for="rememberPassword">
                  Remember password
                </label>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit" (click)="OnSubmit()">Sign in</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class LoginComponent {
  credentials: Credentials = new Credentials();
  rememberPassword: boolean = false;

  constructor(private loginService: LoginService) { }

  @Output()
  public OnSuccessfulLogin = new EventEmitter<void>();

  async OnSubmit() {
    if (this.credentials.username === "" || this.credentials.password === "") {
      return;
    }

    console.log("Logging in with username: " + this.credentials.username,
                "Remember Password: " + this.rememberPassword);
    if (await this.loginService.login(this.credentials)) {
      this.OnSuccessfulLogin.emit();
    }
  }
}
