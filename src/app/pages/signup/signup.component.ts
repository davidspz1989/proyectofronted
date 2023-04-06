import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
//import swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user={
    username:"",
    nombre:"",
    password:"",
    apellido:"",
    email:"",
    telefono:""
  }

// NOTAR EL USO DE MATSNACKBAR PARA USAR NOTIFICACIONES
  constructor(
    private userService:UserService,
    private snack:MatSnackBar){}


  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == "" || this.user.username == null){
        this.snack.open("El nombre de usuario es requerido","Aceptar",{
        duration:3000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
      return;
    }
    this.userService.añadirUsuario(this.user).subscribe((data)=>{
      console.log("servicio añadir usuario: ",data);
      swal("Guardado !!","Usuario guradado con exito","success");     
    },(error)=>{
      console.log(error)
      alert("Error al guardar el usuario")
    }
    )
  }

}
