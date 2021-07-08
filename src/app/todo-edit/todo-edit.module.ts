import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoEditRoutingModule } from './todo-edit-routing.module';
import { TodoEditComponent } from './todo-edit.component';
import { TodoFormModule } from '../shared/components/todo-form/todo-form.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoaderModule } from '../shared/components/loader/loader.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '../shared/components/dialog/dialog.module';


@NgModule({
  declarations: [
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    TodoEditRoutingModule,
    TodoFormModule,
    MatIconModule,
    MatButtonModule,
    LoaderModule,
    MatDialogModule,
    DialogModule,
  ]
})
export class TodoEditModule { }
