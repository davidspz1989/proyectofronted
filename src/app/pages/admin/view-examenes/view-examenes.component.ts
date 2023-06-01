import { Component, OnInit } from '@angular/core';
import { ExamenesService } from 'src/app/service/examenes/examenes.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');
@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent implements OnInit {

  examenes:any=[]

  constructor(private readonly examenService:ExamenesService){}

  ngOnInit(): void {
   this.examenService.listarCuestionarios().subscribe((dato)=>{
    this.examenes=dato
   },(error)=>{
    console.log(error);
      swal("Error !!","Error al cargar los examenes","error")    
   }
   )
  }

  public eliminarExamen(examenId:any){
    // https://sweetalert.js.org/docs/#configuration
    swal({
      title:"Eliminar Examen",
      text:"¿Esta seguro de eliminar el examen?",
      icon:"warning",
      dangerMode:true,
      closeOnClickOutside:false,
      buttons:{
        cancel:{
          text:"Cancelar",
          value:null,
          visible:true,
          className:"",
          closeModal:true
        },
        confirm:{
          text:"Eliminar",
          value:true,
          visible:true,
          className:"",
          closeModal:true
        }
      }
    }).then((result)=>{
      // NOTAR COMO SE EVALUA EL "RESULT"  A CONTRA
      // DEL CODIGO DE EJEMPLO 
      if(result){
        this.examenService.eliminarExamen(examenId).subscribe((data)=>{
          this.examenes=this.examenes.filter((examen:any)=> examen.examenId != examenId)
          swal("Examen eliminado","El examen ha sido eliminado de la base de datos","success")
        },(error)=>{
          console.log(error);
          swal("error !!","Error al eliminar el examen","error")
        })
      }
    })
  }

}
