import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit(): void {
    this.shared.addToCart$.subscribe((data: any) => {
      console.log(data);
    });

    this.shared.viewCatalog$.subscribe((view: string) => {
      console.log(view);
    });
  }

}
