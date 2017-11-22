import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../api/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  login(){
    if(this.username !== undefined && this.password !== undefined) {

      this.auth.login(this.username, this.password).then((user: User) => {
        this.router.navigate(['dashboard']);
      }).catch(error => {
        console.log(error);
      });
    }
    else {
      alert("Both username and password fields are required.");
    }
  }

}
