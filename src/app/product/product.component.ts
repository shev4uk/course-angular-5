import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    const product = {
      name: 'Product 1',
      price: 20
    };
    this.shared.addToCart$.next(product);
  }

  changeView(view: string) {
    this.shared.viewCatalog$.next(view);
  }

}
