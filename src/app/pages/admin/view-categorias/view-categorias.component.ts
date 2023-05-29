import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent implements OnInit {

  categorias:any=[]

  constructor(private categoriaService:CategoriaService){}
  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe((dato:any)=>{
      this.categorias=dato;
    },(error)=>{
      console.log(error);
      swal("Error !!", "Error al cargar categorias","error")
      }
    )
  }
}