import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { SaveTodo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  todo: any;
  loading = true;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.data.getTodo(this.id).subscribe({
      next: (todo) => {
        this.todo = {
          dateComplete: todo.dateComplete,
          description: todo.description,
          name: todo.name,
          priority: todo.priority,
          status: todo.status,
        };
        this.loading = false;
      },
      error: (error) => {

      }
    })
  }

  editTodo(todo: any) {
    console.log(todo);
    this.data.updateTodo(todo, this.id).subscribe((todo) => {
      console.log(todo);
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          text: 'Todo success edit'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/todo'])
      });
    })
  }

}
