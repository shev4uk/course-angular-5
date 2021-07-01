import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  defaultView = 'grid';

  constructor(
    private data: DataService
  ) { 
    const savedView = localStorage.getItem('view');
    if (savedView) {
      this.defaultView = savedView;
    }
  }

  ngOnInit(): void {
    this.data.getAllTodoList().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeView(view: string) {
    this.defaultView = view;
    localStorage.setItem('view', view);
  }

}
