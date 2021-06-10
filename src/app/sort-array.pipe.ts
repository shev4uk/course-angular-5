import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value, args);
    function sortOrder(a: any, b: any) {
      if (args[1]) {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    }

    return value.filter((item: any) => item.name.toLowerCase().includes(args[0])).sort(sortOrder);
  }

}
