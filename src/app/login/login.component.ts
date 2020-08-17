import { AccountService } from './../services/account.service';
import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  formLogin=new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  constructor(private authService:AuthService,private token:TokenService,private router:Router,private account:AccountService, 
    public translateChild: TranslateService, public app: AppComponent) { 

    window.localStorage.getItem('lang');
    
    //changer 'fr' en 'en' pour tester version anglais
    translateChild.setDefaultLang('fr');
  }

  ngOnInit(): void {}
  login(){
    this.authService.login(this.formLogin.value).subscribe(res=>this.handleResponse(res));
  }

  handleResponse(res)
  {
    this.token.handle(res);
    this.account.changeStatus(true);

    this.router.navigateByUrl("/");
  }

  //language: string = 'fr' , force le local storage a enregistrer la var 'fr' et a afficher la traduction FR,
  //avec la propriété OnClick dans le HTML.
  // useLanguage(language: string = 'fr') {
  //   window.localStorage.setItem('lang',language);

  //   this.translateChild.use(language);
  //   this.app.translateParent = this.translateChild;

  // }
}