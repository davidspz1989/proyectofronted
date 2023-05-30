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

  examenes:any=[

  ]

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

}
