import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  user = {
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitTemplateForm() {
    console.log(this.user);
  }

}
