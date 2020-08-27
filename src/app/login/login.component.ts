import { AccountService } from './../services/account.service';
import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';

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
    public app: AppComponent) { 

    
  }
  ngOnInit(): void {}
  login(){
    this.authService.login(this.formLogin.value).subscribe(res=>this.handleResponse(res));
  }

  handleResponse(res) {
    this.token.handle(res);
    this.account.changeStatus(true);

    this.router.navigateByUrl("/");
  }

  
}