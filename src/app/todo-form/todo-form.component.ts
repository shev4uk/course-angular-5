import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  addTodoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoListService: TodoListService
  ) { }

  ngOnInit(): void {
    this.addTodoForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  addTodo() {
    this.todoListService.addTodo(this.addTodoForm.value.name);
    this.addTodoForm.controls['name'].setValue('');
  }

}
