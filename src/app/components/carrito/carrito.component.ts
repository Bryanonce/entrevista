import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public renderizar: boolean = true;
  public data: any[] = [];
  public totalPago: number = 0;
  constructor() {

  }

  ngOnInit(): void {
    if (localStorage.getItem('compras')) {
      this.data = JSON.parse(localStorage.getItem('compras') || '{}');
      console.log(this.data)
    }

    let pago = 0;
    this.data.forEach((element) => {
      pago += Number(element.precio);
    })
    this.totalPago = pago;
    localStorage.setItem('totalPago', JSON.stringify(this.totalPago));
  }

  quitarCarrito(index: number) {
    console.log(index)
    console.log(this.data)
    this.data.splice(index, 1);
    this.data = this.data;
    localStorage.setItem('compras', JSON.stringify(this.data));
    let pago = 0;
    this.data.forEach((element) => {
      pago += Number(element.precio);
    })
    this.totalPago = pago;
    localStorage.setItem('totalPago', JSON.stringify(this.totalPago));
  }

  ngOnChanges(changes: SimpleChanges): void {
    let pago = 0;
    console.log(this.data)
    this.data.forEach((element) => {
      pago += Number(element.precio);
    })
    this.totalPago = pago;
    localStorage.setItem('totalPago', JSON.stringify(this.totalPago));
  }

}
