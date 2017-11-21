import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  login(){
    let formData = new FormData();
    formData.append("name","Arjun");
    formData.append("age", '15');

    this.http.post('http://hotel-management-server.000webhostapp.com/index.php', formData).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error("Error", error);
    });
  }

  ngOnInit() {
    this.login();
  }

}
