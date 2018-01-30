import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "./services/user.service";

@Component( {
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
} )
export class AppComponent {

    constructor( private router: Router, private userService: UserService ) {

    }

    get isAdminUser() {
        return this.userService.isAdminUser();
    }

    get isUser() {
        return this.userService.isUser();
    }
    
    get isLoggedIn() {
        
        return this.userService.isLoggedIn();
    }

    logout() {
        localStorage.clear();
        this.router.navigate( ['/login'] );
    }
}
