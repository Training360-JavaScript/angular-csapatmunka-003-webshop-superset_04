import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'S{s} Shop';

  menuItems: IMenuItem[] = [{ text: 'Home', link: '/', icon: 'home' }];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().forEach((category) => {
      this.menuItems.push({
        text: category.name,
        link: `/${category.name}`,
      });
    });
  }
}
