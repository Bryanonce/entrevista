import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-pago-panel',
  templateUrl: './total-pago-panel.component.html',
  styleUrls: ['./total-pago-panel.component.scss']
})
export class TotalPagoPanelComponent implements OnInit {

  
  @Input()
  data!:any[];

  public totalPago:number = 0;

  constructor(
    private _router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    let pago = 0;
    this.data.forEach((element)=>{
      pago += Number(element.precio);
    })
    this.totalPago = pago;
    localStorage.setItem('totalPago',JSON.stringify(this.totalPago));
  }

  ngOnInit(): void {
    
  }

  comprar(){
    if(localStorage.getItem('token')){
      this._router.navigate(['/pasarela']);
    }else{
      this._router.navigate(['/login']);
    }
  }
}
