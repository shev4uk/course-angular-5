import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllPost() {
    return this.http.get(`${this.urlApi}posts`);
  }

  getSinglePost(id: string) {
    return this.http.get(`${this.urlApi}posts/${id}`);
  }
}
