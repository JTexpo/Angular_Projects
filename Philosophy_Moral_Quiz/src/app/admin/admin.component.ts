import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService} from '../shared/login.service';
import { MoralsService } from '../shared/morals.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  moral="";
  morals:any[] = [];

  editMoral = {moral: "", vote: 0};
  editID = "";


  constructor(public moralsService : MoralsService, 
    private router : Router, 
    private loginService : LoginService) { }

  ngOnInit(): void {
    this.getMorals();
    this.authCheck();   
  }

  getMorals(){
    this.moralsService.getMorals().subscribe( morals => {
      this.morals = morals;
    });
  }

  authCheck(){
    var authCheck : boolean  = false;
    this.loginService.getLogins().subscribe(logins => {
      const admins: any[] = [];
      logins.forEach(login => {admins.push(login.payload.doc.id);});
      admins.forEach(admin => {
        if (this.router.routerState.snapshot.url.includes(admin)){
          authCheck = true;
        }
      });
      if (authCheck === false){
        this.router.navigate(['/login']);
      }
    });
  }

  submitMoral(){
    this.moralsService.createMoral({moral: this.moral, vote: 0});
    this.moral = "";
  }

  onEditSelect(moral:any){
    this.editMoral = moral.payload.doc.data();
    this.editID = moral.payload.doc.id;
  }

  onDeleteMoral(){
    if (this.editID !== ""){
      this.moralsService.deleteMoral(this.editID);
    }
    this.editID = "";
    this.editMoral = {moral: "", vote: 0};
  }

  onUpdateMoral(){
    if (this.editID !== ""){
      this.moralsService.updateMoral(this.editID,this.editMoral);
    }
    this.editID = "";
    this.editMoral = {moral: "", vote: 0};
  }

  onResetAll(){
    this.morals.forEach(moral=>{
      this.moralsService.updateMoral(
        moral.payload.doc.id,
        {moral: moral.payload.doc.data().moral, vote: 0}
      );
    })
  }
}

