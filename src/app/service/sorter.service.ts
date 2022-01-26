import { Injectable } from '@angular/core';
import { SortCategory } from '../model/sort-category';

@Injectable({
  providedIn: 'root'
})
export class SorterService {
  sortList: SortCategory[] = [
    {
      id: 1,
      name: "Név",
      category: "name",
    },
    {
      id: 2,
      name: "Kor",
      category: "age"
    },
    {
      id: 3,
      name: "Ár",
      category: "price"
    }
  ]

  constructor() { }

}
