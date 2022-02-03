import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
})
export class StockPipe implements PipeTransform {
  transform(value: boolean): string {
    return value
      ? `<i class="fa fa-check" aria-hidden="true"></i>`
      : `<i class="fa fa-circle" aria-hidden="true"></i>`;
  }
}
