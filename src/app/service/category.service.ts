import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [
    {
      id: 1,
      name: 'Stratégia',
      description: '',
    },
    {
      id: 2,
      name: 'Családi',
      description: '',
    },
  ];

  constructor() {}

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(catName: string): Observable<Category> {
    for (let category of this.categories) {
      if (category.name === catName) return of(category);
    }
    return of(new Category());
  }
}
