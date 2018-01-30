import { Component } from '@angular/core';
import { AppDataService } from "../services/app-data.service";

@Component( {
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
} )

export class UserComponent {
    nfl;
    
    constructor( private appData: AppDataService) {
        this.nfl = this.appData.getSBs();
    }

}