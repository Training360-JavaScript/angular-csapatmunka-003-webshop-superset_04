import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Product } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  @Input() list!: Product[];

  keys!: string[];
  searchKey!: string;
  searchPhrase!: string;

  constructor( private productService: ProductService) {}

  ngOnInit(): void {
    this.keys = Object.keys(new Product());
  }

  editItem(product: Product) {
    this.productService.update(product).subscribe()
  }

  deleteItem(product: Product) {
    if(confirm("Biztos, hogy törli a terméket?")) {

      this.productService.remove(product).subscribe(
        () => this.list.splice(this.list.findIndex(i => i.id === product.id), 1)
      )
    }
  }

  undo() {
    this.productService.getAll().subscribe(
      list => this.list = list
    )
  }
}
