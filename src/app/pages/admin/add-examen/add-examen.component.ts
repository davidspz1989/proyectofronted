import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { ExamenesService } from 'src/app/service/examenes/examenes.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  categorias:any=[]

  // TOMAR COMO EJEMPLO PARA MODELO DE EXAMEN
  examenData={
    titulo:"",
    descripcion:"",
    puntosMaximos:"",
    numeroDePreguntas:"",
    activo:true,
    categoria:{
      categoriaId:""
    }
  }

  constructor(
    private readonly categoriaService:CategoriaService,
    private readonly snack:MatSnackBar,
    private readonly examenService:ExamenesService){}


  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe((data:any)=>{
      this.categorias=data;      
    },(error)=>{
      console.log(error);
      swal("Error !!","Error al obtener datos","error")
    }
    )
  }

  public agregarExamen(){
    if(this.examenData.titulo.trim() == "" || this.examenData.titulo==null){
      this.snack.open("El titulo es requerido","",{
        duration:3000
      });
      return;
    }

    this.examenService.agregarExamen(this.examenData).subscribe((data)=>{
      swal("Examen Guardado","El examen ha sigo guardado con exito","success");
      this.examenData={
        titulo:"",
        descripcion:"",
        puntosMaximos:"",
        numeroDePreguntas:"",
        activo:true,
        categoria:{
          categoriaId:""
        }
      }
    },(error)=>{
      console.log(error);
      swal("Error !!","Error al guardar el examen","error")
    }
    )
  }

}
