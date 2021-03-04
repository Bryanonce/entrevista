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

  @Input()
  totalPago!:number;

  

  constructor(
    private _router: Router
  ) { }

  

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
