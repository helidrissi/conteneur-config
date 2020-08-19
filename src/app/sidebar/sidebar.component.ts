import { MarquesService } from './../services/marques.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AccountService } from '../services/account.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentuser:null;
  public userInfos: any = null;

  constructor(private account:AccountService,private token:TokenService,private router:Router, private toastr: ToastrService,private marque:MarquesService) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });

  this.account.authStatus.subscribe(

    res=>{
      this.currentuser=this.token.getInfos();
      this.userInfos = this.token.getInfos();
    }
  )

    
  }
 

  fct()
    
  {
   window.location.href = 'http://localhost:9090'
  }
  
  logout(){

    this.token.remove();
    this.account.changeStatus(false);
    let lang = window.localStorage.getItem('lang');
    if(lang == 'en'){
      this.toastr.info(
        `Logout`,
          'You are disconnected!',
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        }
      )} else {
        this.toastr.info(
          `Déconnexion`,
          'Vous êtes déconnecté !',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        )}
    this.router.navigateByUrl("/login");
  }

}
