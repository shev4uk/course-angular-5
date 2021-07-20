import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any): any {
    function sortTodo(a: any, b: any) {
      if (args.property === 'dateComplete' && args.direction === 'ASC') {
        return new Date(a[args.property]).getTime() - new Date(b[args.property]).getTime();
      } else if (args.property === 'dateComplete' && args.direction === 'DESC') {
        return new Date(b[args.property]).getTime() - new Date(a[args.property]).getTime();
      }
      if (args.direction === 'ASC') {
        return a[args.property] - b[args.property];
      } else {
        return b[args.property] - a[args.property];
      }
    }
    return value.sort(sortTodo);
  }

}
