import { Category } from './../../model/category';
import { CategoryService } from './../../service/category.service';
import { ProductService } from './../../service/product.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { filter, mergeMap, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  currentCategory$: Observable<Category> = this.activatedRoute.params.pipe(
    switchMap((params) => this.categoryService.getCategory(params['catName']))
  );
  products$: Observable<Product[]> = this.currentCategory$.pipe(
    switchMap((currentCategory) =>
      this.productService.getProductsByCatID(currentCategory.id)
    )
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}
}
