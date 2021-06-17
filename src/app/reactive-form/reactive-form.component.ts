import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

function confirmPassword(passwordField: string, confirmPasswordField: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[passwordField];
    const confirmPassword = formGroup.controls[confirmPasswordField];
    console.log(password, confirmPassword);

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ confirm: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  get f() { 
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginName: ['login', [Validators.required]],
      passwordForm: ['123', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {validator: confirmPassword('passwordForm', 'confirmPassword')})
  }

  loginUser() {
    this.loginForm.controls['loginName'].errors
  }

}
