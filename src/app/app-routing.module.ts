
import { MarquesComponent } from './marques/marques.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { AccueilComponent } from './accueil/Accueil.component';

import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AuthGuard} from '../app/guards/auth.guard';
import{AfterAuthGuard} from '../app/guards/after-auth.guard'


const routes: Routes = [
  { path: '',  redirectTo: "/acceuil", pathMatch: "full",canActivate:[AuthGuard] },
  { path: 'acceuil', component: AcceuilComponent ,canActivate:[AuthGuard]},
  { path:'marques',component:MarquesComponent,canActivate:[AuthGuard]},
  { path: '',  redirectTo: "/accueil", pathMatch: "full",canActivate:[AuthGuard] },
  { path: 'accueil', component: AccueilComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent ,canActivate:[AfterAuthGuard]},
  { path: '**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }