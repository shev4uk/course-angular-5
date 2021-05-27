import { Component } from '@angular/core';
import { Product, TypeProduct } from './product.model';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public text = 'Some text';
  amountProduct: number;
  isAccess: boolean | number = 1;
  validateForm: unknown;
  age: number;
  heigth: null;
  // arrayNumber: number[];
  arrayNumber: Array<number>;
  typeProduct = TypeProduct;
  private readonly coeficient: number = 5;

  products: Product[] = [{
    id: 1,
    name: 'Product 1',
    price: 100,
    type: 1
  }, {
    id: 2,
    name: 'Product 2',
    price: 80,
    type: 2
  }, {
    id: 3,
    name: 'Product 3',
    price: 200,
    type: 3
  }];

  _width: number;
  set width(value: number) {
    console.log(value);
    if (value >= 100) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }

  get width() {
    return this._width;
  }

  userAdmin: User = {
    name: 'Bob',
    age: 32,
    dateLogin: new Date(),
    email: 'admin@test.com.ua'
  }

  users: User[] = [
    {
      name: 'Bob',
      age: 32,
      dateLogin: new Date(),
      email: 'admin@test.com.ua'
    }
  ]
  
  ngOnInit(): void {
    this.text = '10';
    this.validateForm = false;
    this.age = +'20';
    this.arrayNumber = [1, 2, 3];

    this.width = 100;
    console.log(this.width);
    console.log(this.calcTotalProduct());
  }

  showProduct(name: string, price?: number): void {
    console.log(name);
  }

  private calcTotalProduct(): number {
    let total: number = 0;
    this.products.forEach((product) => {
      total += product.price;
    });
    return total;
  }
}
