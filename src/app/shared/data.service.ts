import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../post.model';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    return this.http.get('https://api.github.com/users/kostia89');
  }

  getAllPost(): Observable<Post[] | string> {
    return this.http.get<Post[]>(`${this.url}posts`).pipe(
      // map(res => res),
      catchError((err) => {
        console.log(err);
        return throwError('Not found')
      })
    );
  }

  addPost(post: {title: string, body: string}): Observable<Post> {
    return this.http.post<Post>(`${this.url}posts`, post);
  }
}
