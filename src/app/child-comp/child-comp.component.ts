import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
})
export class ChildCompComponent implements OnInit {
  @Input() name: string;
  count: number = 1;

  ngOnInit() {
    this.log(`ngOnInit`);
  }
  ngOnChanges() {
    this.log(`OnChanges`);
  }
  // ngDoCheck() {
  //   this.log(`ngDoCheck`);
  // }
  ngAfterViewInit() {
    this.log(`ngAfterViewInit`);
  }
  // ngAfterViewChecked() {
  //   this.log(`ngAfterViewChecked`);
  // }
  ngAfterContentInit() {
    this.log(`ngAfterContentInit`);
  }
  // ngAfterContentChecked() {
  //   this.log(`ngAfterContentChecked`);
  // }

  ngOnDestroy() {
    this.log(`ngOnDestroy`);
  }

  private log(msg: string) {
    console.log(this.count + '. ' + msg);
    this.count++;
  }
}
