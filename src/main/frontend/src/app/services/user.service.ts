import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class UserService {

    constructor( private http: AuthHttp ) {
    }
    
    isAdminUser(): boolean {
        if(localStorage.getItem('user') == 'admin'){
            return true
        }
        return false;
    }
    
    isUser(): boolean {
        if(localStorage.getItem('user') == 'user'){
            return true
        }
        return false;
    }
    
    isLoggedIn(): boolean{
        if(localStorage.getItem('user') != null){
            return true
        }
        return false;
    }

}
