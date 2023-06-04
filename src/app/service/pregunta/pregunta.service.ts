import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private readonly http:HttpClient) { }


  public listarPreguntasExamen(examenId:any){
    return this.http.get(`${baseUrl}/pregunta/${examenId}`)
  }
}
