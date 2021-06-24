import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent implements OnInit {

  post: any;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.data.getSinglePost(id).subscribe((post) => {
      this.post = post;
      console.log(post);
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  back() {
    this.location.back();
  }

}
