import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoViewRoutingModule } from './todo-view-routing.module';
import { TodoViewComponent } from './todo-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TodoViewComponent
  ],
  imports: [
    CommonModule,
    TodoViewRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TodoViewModule { }
