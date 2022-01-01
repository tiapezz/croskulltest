import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrightsGuardGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate() {

    if (window.innerWidth <768) {
      this.router.navigate(['m/rights']);
      return false;
    }

    return true;
  }
  
}
