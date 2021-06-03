import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ItemMenu } from './models/menu.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = 'Test';
  showChildComp: boolean = true;

  listMenu: ItemMenu[] = [{
    name: 'Home'
  }, {
    name: 'About'
  }, {
    name: 'Contact'
  }];

  products: Product[] = [];
  // products: Product[] = [{
  //   name: 'Product 1',
  //   price: 100
  // }, {
  //   name: 'Product 2',
  //   price: 200
  // }];

  tax: number = 10;

  @ViewChild('menu', {static: false}) myMenu: MenuComponent;
  
  toggleMenu() {
    this.myMenu.showMenu();
  }

  toggleChildComp() {
    this.showChildComp = !this.showChildComp;
  }

  changeView(view: string) {
    console.log(view);
  }
}
