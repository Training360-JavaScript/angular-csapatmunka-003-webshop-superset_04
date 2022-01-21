import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlicer'
})
export class TextSlicerPipe implements PipeTransform {

  transform(value: any, long:number = 50): unknown {
    return `${value.slice(0,long)}...`;
  }

}
