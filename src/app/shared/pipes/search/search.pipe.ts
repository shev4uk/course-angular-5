import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string): any {
    return value.filter((item: any) => {
      return item.name.toLowerCase().includes(args.toLowerCase()) || item.description.toLowerCase().includes(args.toLowerCase())
    });
  }

}
