import { AfterViewInit, Component, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  public data:any[] = [];
  public dataFtr:any[] = [];
  public compras:any[] = [];
  constructor(
    private _productoService: ProductosService
  ) { }

  ngAfterViewInit(): void {
    if(localStorage.getItem('compras')){
      this.compras = JSON.parse(localStorage.getItem('compras') || '{}');
    }
  }

  ngOnInit(): void {

    this._productoService.ProductService(environment.products, {
      "transaccion": "generico",
      "tipo": 4
    }).subscribe((response:any)=>{
      if(response.mensajeRetorno === 'Consulta Ok'){
        this.data = response.data;
        console.log(this.data);
      }
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('cambios')
  }

  capturarData(event:any){
    console.log(event)
    this.dataFtr = event;
  }

  agregarCompra(event:any){
    this.compras.push(event)
    localStorage.setItem('compras', JSON.stringify(this.compras));
    console.log('Comprado')
  }



}
