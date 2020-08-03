import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AuthGuard} from '../app/guards/auth.guard';
import{AfterAuthGuard} from '../app/guards/after-auth.guard'


const routes: Routes = [
  { path: '',  redirectTo: "/home", pathMatch: "full",canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent ,canActivate:[AfterAuthGuard]},
  { path: '**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }