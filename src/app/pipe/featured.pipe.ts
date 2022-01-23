import { Product } from 'src/app/model/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured',
})
export class FeaturedPipe implements PipeTransform {
  transform(value: Product[], n: number = 5): Product[] | null {
    if (!value) return null;
    return value.filter((product) => product.featured).slice(0, n);
  }
}
