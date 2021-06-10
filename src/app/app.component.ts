import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nowDate = new Date();

  percentPrice = 0.1;

  price = 20;

  text = 'Some text for slice pipe';

  product = {
    name: "Product",
    price: 20
  };

  length = 3000;

  search = '';

  users: User[] = [{
    name: 'Bob',
    age: 25
  }, {
    name: 'Alice',
    age: 15
  }, {
    name: 'John',
    age: 35
  }];

  orderSort = false;
  
}
