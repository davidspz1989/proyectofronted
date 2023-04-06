import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import helper from '../helper';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjetc = new Subject<boolean>();

  constructor(private httpClient:HttpClient) { }

  generateToken(loginData:any):Observable<any>{
    return this.httpClient.post(`${helper}/generate-token`,loginData);
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  // iniciamos sesion y establecemos el token en localstorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
  }

  public isLoggedIn():Boolean{
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == "" || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  // cerramos sesion y eliminamos el token de localstorage
  public logout():Boolean{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // configurar una clase o una interface
  public setUser(user:any){
    // convierte un objeto a JSON
    localStorage.setItem('user', JSON.stringify(user))
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      // parse convierte un JSON a un objeto
      return JSON.parse(userStr);
    }else{
      this.logout()
      return null;
    }
  }

  public getUserRol(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.httpClient.get(`${helper}/actual-usuario`)
  }
}
