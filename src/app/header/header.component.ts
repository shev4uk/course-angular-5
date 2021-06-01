import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total: number = 0;
  isDisabled: boolean = false;
  counter: number = 0;
  isErrorClass: boolean = false;
  name: string = 'Bob';

  constructor() { }

  ngOnInit(): void {
    this.calcTotal();
  }

  calcTotal() {
    console.log('calc');
    this.total = 1 + 2;
  }

  increase() {
    this.counter++;
    if (this.counter === 10) {
      this.isDisabled = true;
    }
    if (this.counter > 5) {
      this.isErrorClass = true;
    }
  }

  submitName() {
    console.log(this.name);
  }

}
