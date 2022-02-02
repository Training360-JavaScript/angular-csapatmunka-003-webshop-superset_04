import { Product } from './../../model/product';
import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  @Input() list!: Product[]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
