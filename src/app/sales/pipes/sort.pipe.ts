import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Heroe [], value : number ): Heroe [] {

    switch (value) {
     
      case 0:
        return heroes;
        break;

      case 1:
        return heroes = heroes.sort((a,b) => (a.name > b.name) ? 1 : -1);
        break;

        case 2:
        return heroes = heroes.sort((a,b) => (a.fly > b.fly) ? -1 : 1);
        break;

        case 3:
        return heroes = heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
        break;
    
      default:
        return heroes;
        break;
    }
    
  }

}
