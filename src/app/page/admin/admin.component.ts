import { Admin } from 'src/app/model/admin';
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
  isLoggedIn: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.checkAdmin();
  }

  adminOk() {
    this.isLoggedIn = true;
  }

  checkLocalStorage() {
    return localStorage.getItem('admin');
  }

  checkAdmin() {
    if (!this.checkLocalStorage()) return;
    this.adminOk();
  }

  onSubmit(admin: Admin) {
    this.login(admin);
    this.isLoggedIn = true;
  }

  login(admin: Admin) {
    localStorage.setItem('admin', JSON.stringify({ email: admin['email'] }));
  }

  logout() {
    localStorage.removeItem('admin');
    this.isLoggedIn = false;
  }
}
