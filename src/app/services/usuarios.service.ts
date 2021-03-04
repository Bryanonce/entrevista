import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private _userClient: HttpClient
  ) { }

  LoginService(url:string,body: {
    "transaccion": string,
    "datosUsuario": {
      "email": string,
      "password": string
    }
  }) {
    return this._userClient.post(url,body);
  }
}
