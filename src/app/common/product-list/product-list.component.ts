import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[] = [];

  search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
