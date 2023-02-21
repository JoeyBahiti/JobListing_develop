import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthenticationService, private router: Router) {

  }

  canActivate() {
    if (this.service.IsLogged()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }


}
