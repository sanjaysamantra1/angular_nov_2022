import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  templateUrl: './form-demo3.component.html',
  styleUrls: ['./form-demo3.component.css'],
})
export class FormDemo3Component implements OnInit {
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.withFormBuilder();
    // this.withoutFormBuilder();
  }
  withFormBuilder() {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('sachin', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastname: new FormControl('Tendulkar', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(),
      gender: new FormControl('male'),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pin: new FormControl(),
      }),
    });
  }
  withoutFormBuilder() {
    this.registerForm = new FormGroup(
      {
        firstname: new FormControl('sachin', [
          Validators.required,
          Validators.minLength(5),
        ]),
        lastname: new FormControl('Tendulkar', [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: new FormControl(),
        gender: new FormControl('male'),
        address: new FormGroup({
          city: new FormControl(),
          state: new FormControl(),
          pin: new FormControl(),
        }),
      },
      {
        updateOn: 'submit',
      }
    );
  }

  submitMyForm(registerForm: any) {
    console.log(registerForm);
  }
}
