import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello world';

  user = {
    name: 'Bob',
    age: 28
  };

  products = [{
    name: 'Product 1',
    price: 300
  }, {
    name: 'Product 2',
    price: 30
  }, {
    name: 'Product 5',
    price: 50
  }];

  list = [{
    name: 'хліб',
    value: 1,
    done: true
  },{
    name: 'сало',
    value: 0.5,
    done: false
  },{
    name: 'цибуля',
    value: 0.5,
    done: true
  },{
    name: 'картопля',
    value: 3,
    done: false
  }]

  showDropDown = false;

  constructor () {
    setTimeout(() => {
      this.title = 'New title';
      // debugger
    }, 3000);

    console.log(this.title);
  }

  toggleDropDown() {
    // alert('click');
    this.showDropDown = !this.showDropDown;
  }
}
