import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  list$: Observable<Product[]> = this.productService.getAll();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
