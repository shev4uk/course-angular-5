import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../post.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[];
  postForm: FormGroup;
  error: string;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.dataService.getAllPost().subscribe(
      (posts: any) => {
        console.log(posts);
        this.posts = posts;
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }

  buildForm() {
    this.postForm = this.fb.group({
      title: [''],
      body: ['']
    });
  }

  addPost() {
    this.dataService.addPost(this.postForm.value).subscribe((newPost: Post) => {
      this.posts.unshift(newPost);
    });
  }

}
