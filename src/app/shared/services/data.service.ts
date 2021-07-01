import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlApi);
  }
}
