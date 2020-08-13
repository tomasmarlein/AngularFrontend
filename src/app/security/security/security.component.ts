import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { UserLogin } from '../models/user-login.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  model = new UserLogin('','');
  
  isCorrect: boolean = false;
  isRegister: boolean = true;

  ngOnInit(){
  }
  constructor(private _authenticateService : AuthenticateService, private router: Router) { }

  submitted : boolean = false;

  onRegister(){
    this.isRegister = false;
    console.log("to login");
  }

  onLogin() {
    this.isRegister = true;
    console.log("to register");
  }

  
  onSubmit() {
    console.log(this.model);

    if(this.isRegister == true){
      this._authenticateService.authenticate(this.model).subscribe(result => {
        localStorage.setItem("token",result.token);
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        console.log("User is logged in!");
        this.router.navigateByUrl('/dashboard');
        
        },
        (error:HttpErrorResponse) => {
            let errorPayload = JSON.parse(error.message);
            //ToDo: apply your handling logic e.g.:
            //console.log(errorPayload[0].description
            this.isCorrect = true;
            console.log(error.error);
        });
  }else {
    this._authenticateService.register(this.model).subscribe(result => {
      console.log("user registration");
      this.router.navigateByUrl('/');
      this.isRegister = true;
      window.location.reload();
      });
  }
  }
}
