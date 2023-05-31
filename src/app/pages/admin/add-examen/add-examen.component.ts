import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
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

  constructor(private readonly categoriaService:CategoriaService){}


  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe((data:any)=>{
      this.categorias=data;      
    },(error)=>{
      console.log(error);
      swal("Error !!","Error al obtener datos","error")
    }
    )
  }

}
