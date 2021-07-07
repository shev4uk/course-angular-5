import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  addTodoForm: FormGroup;
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
    return this.addTodoForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addTodoForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateComplete: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      status: ['']
    });
  }

  addNewTodo() {
    console.log(this.addTodoForm.value);
    this.dataService.addNewTodo(this.addTodoForm.value).subscribe((data) => {
      console.log(data);
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          text: 'New todo success added'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/todo'])
      });
    })
  }

}
