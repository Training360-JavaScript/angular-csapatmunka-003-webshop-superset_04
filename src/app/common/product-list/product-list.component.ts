import { SortCategory } from './../../model/sort-category';
import { SorterService } from './../../service/sorter.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[] | null = [];

  search: string = '';

  selected: string = "";
  sorterKey: string ="";

  sortList: SortCategory[] = this.sorterService.sortList;

  constructor(
    private sorterService: SorterService,
  ) {}

  valueChange(event: any) {
    this.sorterKey=String(this.selected);
  }

  ngOnInit(): void {}
}
