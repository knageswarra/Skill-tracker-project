import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (sessionStorage.getItem("currentUser") && sessionStorage.getItem('type')) {
      return true;
    } else {
      console.log("inside authguard elseee...");
      this.router.navigate(['login']);
      return false; // Return false if canActivate condition is not met
    }
  }
}
