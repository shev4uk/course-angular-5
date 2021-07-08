import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SaveTodo, Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllTodoList(): Observable<SaveTodo[]> {
    return this.http.get<SaveTodo[]>(this.urlApi);
  }

  addNewTodo(todo: Todo): Observable<SaveTodo> {
    return this.http.post<SaveTodo>(this.urlApi, todo);
  }

  getTodo(id: string): Observable<SaveTodo> {
    return this.http.get<SaveTodo>(`${this.urlApi}/${id}`);
  }

  updateTodo(todo: Todo, id: string): Observable<SaveTodo> {
    return this.http.put<SaveTodo>(`${this.urlApi}/${id}`, todo);
  }
}
