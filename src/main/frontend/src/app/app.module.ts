import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminAuthGuard } from "./guards/admin-auth-guard.service";
import { UserService } from "./services/user.service";
import { DataFilterPipe } from "./services/data-filter-pipe";
import { DataTableModule } from "angular2-datatable";
import { AppDataService } from "./services/app-data.service";

export function authHttpServiceFactory( http: Http ) {
    return new AuthHttp( new AuthConfig( {
        //headerPrefix: 'Bearer',
        tokenName: "token",
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: false,
        noTokenScheme: true,
        tokenGetter: ( () => localStorage.getItem( "token" ) )
    } ), http );
}

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AdminComponent,
        UserComponent,
        DataFilterPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RoutesModule,
        DataTableModule
    ],
    providers: [
        { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http] },
        UserService,
        AppDataService,
        AuthGuard,
        AdminAuthGuard,
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
