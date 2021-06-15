import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, text: string): any {
    console.log(value, text);
    return value.filter((item: any) => item.name.toLowerCase().includes(text));
  }

}
