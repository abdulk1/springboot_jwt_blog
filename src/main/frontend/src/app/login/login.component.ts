import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from "../services/login.service";
import { AccountCredentials } from "../services/accountcredentials";

@Component( {
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
} )

export class LoginComponent {
    incorrectCredentials: boolean;
    unauthorizedUser: boolean;
    user: AccountCredentials;
    username: string;
    password: string;

    constructor( private loginService: LoginService, private router: Router, private route: ActivatedRoute ) {
        if ( localStorage.getItem( 'user' ) != null ) {
            this.router.navigate( ['/home'] );
        }
    }
    onLogin() {
        this.incorrectCredentials = false;
        this.unauthorizedUser = false;

        this.user = new AccountCredentials(this.username, this.password);
        
        this.loginService.login( this.user )
            .subscribe(
            results => {
                
                let usertype = results._body;
                
                if ( usertype != 'admin' && usertype != 'user' ) {
                    this.unauthorizedUser = true;
                } else {
                    localStorage.setItem( 'user', usertype );
                    let str = results.headers._headers.get( "authorization" );
                    var splitted = str[0].split( " " );
                    localStorage.setItem( 'token', splitted[1] );

                    this.router.navigate( ['/home'] );
                }
            },
            err => {
                this.incorrectCredentials = true;
            }
            );
    }
} 
