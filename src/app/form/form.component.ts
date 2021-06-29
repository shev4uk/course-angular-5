import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  orderForm: FormGroup;
  nextDay;
  deliveries = [{
    name: 'Delivery 1', id: 1
  }, {
    name: 'Delivery 2', id: 2
  }, {
    name: 'Delivery 3', id: 3
  }];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { 
    this.nextDay = new Date(new Date().setDate(new Date().getDate() + 1));
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      dateOrder: ['', [Validators.required]],
      delivery: ['', [Validators.required]]
    });
  }

  createOrder() {
    console.log(this.orderForm.value);
  }

  openModal() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
