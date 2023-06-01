import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  constructor(private http:HttpClient) { }

  public listarCuestionarios(){
    return this.http.get(`${baseUrl}/examen/`);
  }

  public agregarExamen(examen:any){
    return this.http.post(`${baseUrl}/examen/`,examen)
  }
}
