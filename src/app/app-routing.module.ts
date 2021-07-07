  
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: 'todo', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
    },
    {
        path: 'todo/add', loadChildren: () => import('./todo-add/todo-add.module').then(m => m.TodoAddModule)
    },
    {
        path: 'todo/:id', loadChildren: () => import('./todo-view/todo-view.module').then(m => m.TodoViewModule)
    },
    {
        path: '', redirectTo: 'todo', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'todo'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}