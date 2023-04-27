import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user:any=null

  constructor(private readonly loginService:LoginService ){}


  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }

}
