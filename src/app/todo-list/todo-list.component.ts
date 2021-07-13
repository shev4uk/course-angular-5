import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { SaveTodo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';
import { filter, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: SaveTodo[] = [];
  defaultView = 'grid';

  constructor(
    private data: DataService,
    private dialog: MatDialog,
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

  deleteList(id: number, index: number) {
    console.log(id);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: 'Are you want delete the todo?',
        isDeleteDialog: true
      }
    });
    dialogRef.afterClosed().pipe(
      filter((result) => result),
      switchMap((result: Observable<SaveTodo | null>) => {
        if (result) {
          return this.data.deleteTodo(id)
        } else {
          return of(null)
        }
      })
    )
    .subscribe((res) => {
      this.todos.splice(index, 1);
    })
  }

}

