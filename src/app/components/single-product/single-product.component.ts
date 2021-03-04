import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {


  @Input()
  data!:any[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
