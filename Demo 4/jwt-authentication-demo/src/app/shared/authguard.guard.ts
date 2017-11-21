import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.getUserLoggedIn();
   }
}
