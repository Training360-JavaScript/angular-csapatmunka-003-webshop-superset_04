import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  jumpToProduct(product: Product): void {
    this.router.navigateByUrl(`/products/${product.id}`);
  }
}
