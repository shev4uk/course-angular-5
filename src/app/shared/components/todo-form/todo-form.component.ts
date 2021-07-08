import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveTodo, Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Input() todo: any;
  @Output() submitForm = new EventEmitter<Todo>();

  todoForm: FormGroup;
  minDay = new Date();
  priorities = [{
    name: 'Low',
    id: 1
  }, {
    name: 'Middle',
    id: 2
  }, {
    name: 'High',
    id: 3
  }];

  get form() {
    return this.todoForm.controls;
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.initForm();
  }

  buildForm() {
    this.todoForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateComplete: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      status: ['']
    });
  }

  initForm() {
    if (this.todo) {
      console.log(this.todo);
      this.todoForm.setValue(this.todo);
    }
  }

  submitTodoForm() {
    this.submitForm.emit(this.todoForm.value);
  }

}
