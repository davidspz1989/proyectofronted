import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/service/pregunta/pregunta.service';

@Component({
  selector: 'app-view-examen-preguntas',
  templateUrl: './view-examen-preguntas.component.html',
  styleUrls: ['./view-examen-preguntas.component.css']
})
export class ViewExamenPreguntasComponent implements OnInit {

  examenId=0
  titulo:any
  preguntas:any=[]

  constructor(
    private readonly route:ActivatedRoute,
    private readonly preguntaService:PreguntaService
  ){}


  ngOnInit(): void {
    this.examenId=this.route.snapshot.params['examenId']
    this.titulo=this.route.snapshot.params['titulo']
    this.preguntaService.listarPreguntasExamen(this.examenId).subscribe((dato)=>{
      this.preguntas=dato
    },(error)=>{
      console.log(error);      
    })
  }

}
