import { Component } from '@angular/core';
import { AppDataService } from "../services/app-data.service";

@Component( {
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
} )

export class AdminComponent {

    public filterQuery = "";
    public rowsOnPage = 25;
    public sortBy = "name";
    public sortOrder = "asc";

    nfl;

    constructor( private appData: AppDataService ) {
        this.appData.getSBs()
            .subscribe(
            result => {
                this.nfl = result;
            } );
    }
}