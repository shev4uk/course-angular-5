import { Component, Input, OnInit } from '@angular/core';
import { ItemMenu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu: ItemMenu[];

  statusMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.statusMenu = !this.statusMenu;
  }

}
