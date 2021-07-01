import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoEditRoutingModule } from './todo-edit-routing.module';
import { TodoEditComponent } from './todo-edit.component';


@NgModule({
  declarations: [
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    TodoEditRoutingModule
  ]
})
export class TodoEditModule { }
