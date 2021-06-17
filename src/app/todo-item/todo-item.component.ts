import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;

  @Output() updateState = new EventEmitter();
  @Output() removeTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateStateTodo(event: any, index: number) {
    const state = event.currentTarget.checked;
    this.updateState.emit({state, index})
  }

  remove(index: number) {
    this.removeTodo.emit(index);
  }

  edit(i: number) {

  }

}
