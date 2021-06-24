import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getAllPost().subscribe((posts) => {
      this.posts = posts;
    })
  }

  trackPost(index: any, item: any) {
    return item.id;
  }

}
