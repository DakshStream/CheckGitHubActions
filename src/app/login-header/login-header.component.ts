import { Component } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent {

  message: string = '';

  onLogin() {
    this.message = "Login button clicked! Redirecting or opening login flow...";
  }
}
