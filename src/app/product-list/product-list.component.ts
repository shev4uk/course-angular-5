import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output() update = new EventEmitter<string>();

  newProduct = {
    name: '',
    price: ''
  }

  products: Product[] = [
    {
      name: 'Product 1',
      price: 200,
      status: false
    }, {
      name: 'Product 2',
      price: 100,
      status: false
    }, {
      name: 'Product 3',
      price: 50,
      status: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    console.log(this.newProduct);
    this.products.push({
      name: this.newProduct.name,
      price: +this.newProduct.price,
      status: false
    });
    this.newProduct = {
      name: '',
      price: ''
    }
    this.update.emit('add');
  }

  removeProductByIndex(index: number) {
    console.log(index);
    this.products.splice(index, 1);
    this.update.emit('remove');
  }

  changeStatus(event: {index: number, status: boolean}) {
    console.log(event);
    this.products[event.index].status = event.status;
    this.update.emit('change status');
  }

}
