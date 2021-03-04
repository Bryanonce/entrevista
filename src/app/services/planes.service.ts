import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(
    private _planes:HttpClient
  ) { }

  consultPlanes(){
    let headers = new HttpHeaders().set('x-token',localStorage.getItem('token') || '')
    return this._planes.post(environment.planes,{  "transaccion": "consultarPlanes" },{headers:headers})
  }
}
