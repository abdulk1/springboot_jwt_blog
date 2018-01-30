import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminAuthGuard } from "./guards/admin-auth-guard.service";

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot( routes, { useHash: true } );

