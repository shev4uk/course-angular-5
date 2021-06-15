import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text: string = '';
  orderDirection: boolean = false;

  products: Product[] = [{
    id: 1,
    name: 'Product 1',
    price: 100
  }, {
    id: 2,
    name: 'Product 2',
    price: 10
  }, {
    id: 3,
    name: 'Product 3',
    price: 50
  }];

  orderPrice() {
    this.orderDirection = !this.orderDirection;
  }
  
}
