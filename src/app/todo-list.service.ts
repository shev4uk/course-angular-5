import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todo: Todo[] = [];

  constructor() {
    const savedStorage = localStorage.getItem('todo');
    if (savedStorage) {
      this.todo = JSON.parse(savedStorage);
    }
  }

  addTodo(name: string) {
    this.todo.push({
      name,
      state: false
    });
    this.saveToStorage();
  }

  updateTodo(checked: boolean, index: number) {
    this.todo[index].state = checked;
    this.saveToStorage();
  }

  removeTodo(index: number) {
    this.todo.splice(index, 1);
    this.saveToStorage();
  }

  removeAllTodo() {
    this.todo.length = 0;
    localStorage.removeItem('todo');
  }

  private saveToStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}
