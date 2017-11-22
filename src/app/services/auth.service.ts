import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../api/user';
import { HOST } from '../settings';

@Injectable()
export class AuthService {

  loggedIn: boolean = false;
  currentUser: User = null;

  constructor(private http: HttpClient) {

  }

  get authenticated(): boolean {
    return this.loggedIn;
  }

  set authenticated(val: boolean) {
    this.loggedIn = val;
  }

  login(username: string, password: string): Promise<User> {
    let formData = new FormData();
    formData.append("username",username);
    formData.append("password", password);
    console.log(formData);
    return new Promise((resolve, reject) => {
      this.http.post(`${HOST}/login.php`, formData).subscribe((data:any)=> {
          resolve(data);
          this.authenticated = true;
          this.currentUser = data;
      }, error => {
        reject(error);
      });
    });
  }

}
