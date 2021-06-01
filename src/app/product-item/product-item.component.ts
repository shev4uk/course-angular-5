import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() inputProduct: Product;
  @Input() index: number;

  @Output() remove = new EventEmitter<number>();
  @Output() changeStatusProduct = new EventEmitter<{index: number, status: boolean}>();

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct() {
    console.log('remove', this.index);
    this.remove.emit(this.index);
  }

  changeStatus() {
    this.inputProduct.status = !this.inputProduct.status;
    console.log('change', this.index, this.inputProduct.status);
    this.changeStatusProduct.emit({index: this.index, status: this.inputProduct.status});
  }

}
