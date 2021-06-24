import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'posts', loadChildren: () => import('./post/post-list.module').then(m => m.PostListModule),
        data: { preload: true }
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: NotFoundPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        preloadingStrategy: PreloadAllModules
      })],
    exports: [RouterModule]
})
export class AppRoutingModule {}