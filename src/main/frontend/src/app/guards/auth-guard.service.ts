import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private router: Router) { }

    canActivate() {
        // Check to see if a user is logged in
        if (tokenNotExpired()) {
          // If they are, return true and allow the user to load the component
          return true;
        }else{
            // If not, then redirect them to the login page
            localStorage.clear();
            this.router.navigateByUrl( '/login' );
            return false;
        }
    }

}