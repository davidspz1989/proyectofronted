import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { ExamenesService } from 'src/app/service/examenes/examenes.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit {

  examenId=0
  getExamen:any
  categorias:any

  constructor(
    private readonly route:ActivatedRoute,
    private readonly examenService:ExamenesService,
    private readonly categoriaService:CategoriaService,
    private readonly router:Router){}


  ngOnInit(): void {
    this.examenId=this.route.snapshot.params['examenId']
    this.examenService.obtenerExamen(this.examenId).subscribe((dato)=>{
      this.getExamen=dato;
    },(error)=>{
      console.log(error);       
    })

    this.categoriaService.listarCategorias().subscribe((dato)=>{
      this.categorias=dato;
    },(error)=>{
      console.log(error);      
      swal("Error en categorias","error al cargar las categorias","error")     
    })
  }

  public actualizarExamen(){
    this.examenService.actualizarExamen(this.getExamen).subscribe((dato)=>{
      swal("Examen actualizado","El examen ha sido actualizado con exito","success").then(
        ()=>{
          this.router.navigate(['/admin/examenes'])
        }
      )
    },(error)=>{
      console.log(error);
      swal("Error en el sistema","No se ha podido actualizar el examen","error")
    })
  }

  

}
