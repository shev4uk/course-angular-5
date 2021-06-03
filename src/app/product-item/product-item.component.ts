import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  _tax: number;
  @Input() product: Product;
  @Input() set tax(value: number) {
    console.log(value);
    this._tax = value;
    this.calcProductByTax();
  };

  get tax() {
    return this._tax;
  }

  price: number;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.tax);
  }

  // ngOnChanges() {
  //   console.log(this.tax);
  // }

  private calcProductByTax() {
    this.price = Math.floor(this.product.price * (1 + this.tax / 100));
  }

}
