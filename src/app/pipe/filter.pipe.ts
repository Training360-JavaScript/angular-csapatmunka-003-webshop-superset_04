import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], phrase: string): any[] {
    return list.filter(item => item.name.includes(phrase));
  }

}
