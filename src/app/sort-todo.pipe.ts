import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
  name: 'sortTodo',
  pure: false
})
export class SortTodoPipe implements PipeTransform {

  transform(value: Todo[]): Todo[] {
    function sortState(a: any, b: any) {
      return a.state - b.state;
    }
    return value.sort(sortState);
  }

}
