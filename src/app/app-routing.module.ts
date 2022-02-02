import { ProductPageComponent } from './page/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cat01Component } from './page/cat01/cat01.component';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products/:prodId',
    component: ProductPageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: ':catName',
    component: Cat01Component,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
