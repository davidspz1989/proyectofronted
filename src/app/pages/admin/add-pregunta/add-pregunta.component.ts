import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta/pregunta.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');


@Component({
  selector: 'app-add-pregunta',
  templateUrl: './add-pregunta.component.html',
  styleUrls: ['./add-pregunta.component.css']
})
export class AddPreguntaComponent implements OnInit {

  examenId=0
  titulo:any
  pregunta:any={
    contenido:"",
    opcion1:"",
    opcion2:"",
    opcion3:"",
    opcion4:"",
    respuesta:"",
    examen:{}}

  constructor(
    private readonly route:ActivatedRoute,
    private readonly preguntaService:PreguntaService,
    private readonly snack:MatSnackBar
  ){}


  ngOnInit(): void {
    this.examenId=this.route.snapshot.params['examenId'];
    this.titulo=this.route.snapshot.params['titulo'];
    this.pregunta.examen['examenId']=this.examenId;
  }

  public guardarPregunta(){
    if(this.pregunta.contenido.trim()=="" || this.pregunta.contenido==null){
      return;
    }

    if(this.pregunta.opcion1.trim()=="" || this.pregunta.opcion1==null){
      return;
    }

    if(this.pregunta.opcion2.trim()=="" || this.pregunta.opcion2==null){
      return;
    }

    if(this.pregunta.opcion3.trim()=="" || this.pregunta.opcion3==null){
      return;
    }

    if(this.pregunta.opcion4.trim()=="" || this.pregunta.opcion4==null){
      return;
    }

    this.preguntaService.guardarPregunta(this.pregunta).subscribe((dato)=>{
      swal("Pregunta guardada !!","la pregunta ha sido guardada","success")
      this.pregunta.contenido=""
      this.pregunta.opcion1=""
      this.pregunta.opcion2=""
      this.pregunta.opcion3=""
      this.pregunta.opcion4=""
      this.pregunta.respuesta=""
    },(error)=>{
      swal("Error al guardar !!","Error al guardar la pregunta","error")
      console.log(error);      
    })
  }

}
