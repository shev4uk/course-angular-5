import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, direction: boolean): any {
    function orderSort(a: any, b: any) {
      if (direction) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
      
    }
    return value.sort(orderSort);
  }

}
