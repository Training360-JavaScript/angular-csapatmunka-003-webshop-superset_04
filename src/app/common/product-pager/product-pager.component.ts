import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'model/product';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {

  @Input() productList: Product[]

  constructor() { }

  ngOnInit(): void {
  }

}