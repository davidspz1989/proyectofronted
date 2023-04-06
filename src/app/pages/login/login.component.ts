import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData={
    "username":"",
    "password":""
  }

  constructor(
    private snak:MatSnackBar,
    private loginService:LoginService,
    private router:Router){}
  ngOnInit(): void {}

  onSubmit(){
    if(this.loginData.username=="" || this.loginData.username==null){
      this.snak.open("Nombre de usuario requerido","Aceptar",{
        duration:3000
      })
    }

    if(this.loginData.password=="" || this.loginData.password==null){
      this.snak.open("Contraseña requerida","Aceptar",{
        duration:3000
      })
    }
    this.loginService.generateToken(this.loginData).subscribe((data:any)=>{
      console.log(data);
      // EN ESTA PARTE DEPENDE DEL INTERCEPTOR CREADO 
      this.loginService.loginUser(data.token);
      this.loginService.getCurrentUser().subscribe((user)=>{
        this.loginService.setUser(user);
        console.log(user);
        console.log(this.loginService.getUser())        
        if(this.loginService.getUserRol() == "ADMIN"){
          this.router.navigate(['admin'])
          this.loginService.loginStatusSubjetc.next(true)          
        }
        else if(this.loginService.getUserRol() == "NORMAL"){
          this.router.navigate(['user-dashboard'])
          this.loginService.loginStatusSubjetc.next(true)          
        }
        else{
          this.loginService.logout()
        }
      })
    },(error)=>{
      console.log(error);
      this.snak.open("Detalles invalidos, vuelva a intentar !!", "Aceptar ",{
        duration:3000
      })
    }
    )
  }

}
