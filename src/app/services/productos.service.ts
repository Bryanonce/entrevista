import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private _userClient: HttpClient
  ) { }

  ProductService(url:string,body: {
    "transaccion": string,
    "tipo": number
   }) {
    return this._userClient.post(url,body);
  }
}
