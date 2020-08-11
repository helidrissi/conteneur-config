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

  constructor(private account:AccountService,private token:TokenService,private router:Router, private toastr: ToastrService) { }

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

  logout(){

    this.token.remove();
    this.account.changeStatus(false);
    this.toastr.info(
      `Déconnexion`,
      'Vous êtes déconnecter !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
        
      }
  )
    this.router.navigateByUrl("/login");
  }

}
