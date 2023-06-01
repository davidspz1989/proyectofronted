import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent {

  // CREAR UN MODELO
  categoria={
    titulo:"",
    descripcion:""
  }

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar){}

  public formSubmit(){
    if(this.categoria.titulo.trim()=="" || this.categoria.titulo==null){
      this.snack.open("El titulo es requerido!!","",{
        duration:3000
      })
      // EL RETURN SIRVE PARA EL CONTROL DEL IF, 
      // SIN EL RETURN, SE ACTIVA EL IF PERO CONTINUA EL CODIGO
      // GUARDANDO UN DATO VACIO
      return;
    }

    this.categoriaService.agregarCategorias(this.categoria).subscribe((dato)=>{
      this.categoria.titulo=""
      this.categoria.descripcion=""
      swal("Categoria Agregada !!","La categoria ha sido agregada con exito","success")
    },(error)=>{
      console.log(error);
      swal("Error !","Error al guardar la categoria","error")
    }
    )
  }

}
