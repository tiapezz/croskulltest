import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DHomeGuardGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate() {

    if (window.innerWidth <768) {
      this.router.navigate(['m/home']);
      return false;
    }

    return true;
  }
  
}
