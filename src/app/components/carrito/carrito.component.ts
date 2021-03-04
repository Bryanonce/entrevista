import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public data:any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('compras')){
      this.data = JSON.parse(localStorage.getItem('compras') || '{}');
    }
  }

  quitarCarrito(id:number){
    this.data = this.data.filter(d=>d.id !== id)
    localStorage.setItem('compras',JSON.stringify(this.data))
  }

}
