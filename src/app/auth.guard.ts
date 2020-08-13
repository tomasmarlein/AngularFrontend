import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './security/services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthenticateService, private _router: Router) {}

  canActivate(): boolean {
    if(this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate([''])
      return false
    }
  }
  
}
