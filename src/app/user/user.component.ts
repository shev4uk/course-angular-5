import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getUser().subscribe((user) => {
      console.log(user);
      this.user = user;
    });

  }

}
