import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.scss']
})
export class PasarelaPagoComponent implements OnInit {

  public totalPago: number = 0;
  public montoPlan: number = 0;
  public saldoFinal: number = 0;
  public data:any[] = [];

  constructor(
    private _planesService: PlanesService
  ) { }

  ngOnInit(): void {
    this._planesService.consultPlanes().subscribe((response:any)=>{
      this.data = response.retorno;
      console.log(this.data)
      this.totalPago = Number(localStorage.getItem('totalPago'));
    })
  }

  cambiarMontoPlan(event:any){
    console.log(event.target.value)
    this.montoPlan = Number(this.data.filter(d=>d.codigo===event.target.value)[0].valor.substring(1));
    this.saldoFinal = this.montoPlan - this.totalPago;
  }


  pagar(){
    if(this.saldoFinal<=0){
      alert('No cumple los requisitos de compra')
    }else{
      alert("Comprado con exito")
    }
  }
  

}
