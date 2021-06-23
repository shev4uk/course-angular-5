import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  addToCart$ = new Subject();
  viewCatalog$ = new BehaviorSubject('list');

  constructor() { }
}
