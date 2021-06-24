import { NgModule } from '@angular/core';
import { PostListRoutingModule } from './post-list-routing.module';

import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { PostSingleComponent } from './post-single/post-single.component';

@NgModule({
    declarations: [
        PostListComponent,
        PostSingleComponent
    ],
    imports: [
        CommonModule,
        PostListRoutingModule
    ]
})

export class PostListModule { }