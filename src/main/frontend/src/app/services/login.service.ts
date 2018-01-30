import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AccountCredentials } from "./accountcredentials";

@Injectable()
export class LoginService {

    headers: Headers;

    constructor( private http: Http, private router: Router ) { }

    login( user: AccountCredentials ): Observable<any> {
        
        return this.http.post( '/login', user, { headers: new Headers } );
    }

}
