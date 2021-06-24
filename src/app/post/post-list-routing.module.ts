import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostSingleComponent } from "./post-single/post-single.component";
import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
    {
        path: '', component: PostListComponent
    },
    {
        path: ':id', component: PostSingleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostListRoutingModule {}