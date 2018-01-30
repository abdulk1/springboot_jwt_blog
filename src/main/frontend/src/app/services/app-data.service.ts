import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class AppDataService {

    constructor( private http: AuthHttp ) {
    }

    getSBs() {
        return this.http.get( '/nfl' )
            .map( res => res.json() );
    }

}
