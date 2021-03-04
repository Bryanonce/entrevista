import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public data:any[] = [];
  constructor() { 
    
  }

  ngOnInit(): void {
    if(localStorage.getItem('compras')){
      this.data = JSON.parse(localStorage.getItem('compras') || '{}');
      console.log(this.data)
    }
  }

  quitarCarrito(index:number){
    console.log(index)
    console.log(this.data)
    this.data.splice(index,1);
    localStorage.setItem('compras',JSON.stringify(this.data))
  }

}
