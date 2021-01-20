import { Component, OnInit } from '@angular/core';

import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  private loginInfo :any = [];

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
    this.getLogins();
  }

  getLogins(){
    this.loginService.getLogins().subscribe(logins =>{
      this.loginInfo = logins;
    })
  }

  onSubmit(){
    this.loginInfo.forEach((login: any) => {
      if ((login.payload.doc.data().username === this.username)&&
        (login.payload.doc.data().password === this.password)){
          this.router.navigate(['/admin/'+login.payload.doc.id]);
        }
    });
  }

}
