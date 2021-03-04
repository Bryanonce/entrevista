import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-generics',
  templateUrl: './products-generics.component.html',
  styleUrls: ['./products-generics.component.scss']
})
export class ProductsGenericsComponent implements OnInit {

  @Input()
  data !: any[];

  @Output()
  compra: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  dataFilter:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDEscription(id:number){
    this.dataFilter.emit(this.data.filter(d=>d.id === id));
    console.log('enviado')
    //this._router.navigate([`producto/${id}`])
    //console.log(this.dataFilter)
  }

  buyProduct(producto:any){
    this.compra.emit(producto);
    alert('Añadido con éxito');
  }

}
