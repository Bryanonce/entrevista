import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes-pago',
  templateUrl: './planes-pago.component.html',
  styleUrls: ['./planes-pago.component.scss']
})
export class PlanesPagoComponent implements OnInit {

  @Input()
  data !: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
