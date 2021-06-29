import { NgModule } from '@angular/core';
import { PostListRoutingModule } from './post-list-routing.module';

import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { PostSingleComponent } from './post-single/post-single.component';
import { AuthorModule } from '../shared/components/author/author.module';

@NgModule({
    declarations: [
        PostListComponent,
        PostSingleComponent
    ],
    imports: [
        CommonModule,
        PostListRoutingModule,
        AuthorModule
    ]
})

export class PostListModule { }