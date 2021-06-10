import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metr'
})
export class MetrPipe implements PipeTransform {

  transform(value: number, args: string): string {
    console.log(value, args);
    return value / 1000 + args;
  }

}
