import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text: string = '';
  orderDirection: boolean = false;
  addFormProduct: FormGroup;

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

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.addFormProduct = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
  }

  orderPrice() {
    this.orderDirection = !this.orderDirection;
  }

  addProduct() {
    console.log(this.addFormProduct.value);
    this.products.push({
      id: 5,
      ...this.addFormProduct.value
    });
    console.log(this.products);
  }
  
}
