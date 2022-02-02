import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  featuredProducts: Product[] = [];
  randomProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => (this.products = products),
    });
    this.featuredProducts = this.selectFeaturedProducts(5);
    this.randomProducts = this.selectRandomProducts(5);
  }

  selectFeaturedProducts(n: number): Product[] {
    return this.products.filter((product) => product.featured).slice(0, n);
  }

  selectRandomProducts(n: number): Product[] {
    let noneFeaturedProducts = this.products.filter(
      (product) => !product.featured
    );
    return this.getRandomItems(noneFeaturedProducts, 5);
  }

  getRandomItems(arr: any[], n: number): any[] {
    let randomSet = new Set();
    while (randomSet.size < 5) {
      let index = Math.floor(arr.length * Math.random());
      randomSet.add(arr[index]);
    }
    return [...randomSet];
  }
}
