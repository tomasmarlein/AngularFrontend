import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../security/services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthenticateService, private router: Router) {}

  loggedIn : boolean;

  ngOnInit() {
    this._authService.isLoggedin.subscribe(result => {
      this.loggedIn = result;
    })
  }

  logOut(){
    this._authService.isLoggedin.subscribe(result => {
      this.loggedIn = false;
      localStorage.removeItem("token");
    })
    
    this.router.navigateByUrl('');
    window.location.reload();
  }

}
