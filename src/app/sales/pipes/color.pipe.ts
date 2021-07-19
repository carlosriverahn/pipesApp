import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color,): unknown {
    
    return ;
  }

}
