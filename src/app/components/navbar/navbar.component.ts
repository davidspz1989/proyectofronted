import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggin:Boolean=false
  user:any=null

  constructor(
    private readonly loginService:LoginService,
    ){}

  ngOnInit(): void {
    this.loginService.loginStatusSubjetc.asObservable().subscribe((data)=>{
      this.isLoggin=this.loginService.isLoggedIn()
      this.user=this.loginService.getUser()
    })
  }

  public logout():void{
    this.loginService.logout()
    window.location.href='/login'
  }

}
