import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentuser:null;
  public userInfos: any = null;

  constructor(private account:AccountService,private token:TokenService,private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {

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
      'Vous êtes déconnecté !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
  )
    this.router.navigateByUrl("/login");
  }

}
