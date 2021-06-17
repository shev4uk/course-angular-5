import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(
    public todoService: TodoListService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.todo;
  }

  updateStateTodo(event: {state: any, index: number}) {
    this.todoService.updateTodo(event.state, event.index);
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }

  editTodo(i: number) {

  }

  removeAllTodo() {
    this.todoService.removeAllTodo();
  }

}
