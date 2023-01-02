import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo2',
  templateUrl: './form-demo2.component.html',
  styleUrls: ['./form-demo2.component.css'],
})
export class FormDemo2Component implements OnInit {
  user: any = { fname: '', lname: 'tendulkar',email:'' };
  constructor() {}

  ngOnInit(): void {}

  submitMyForm(myForm: any) {
    console.log(myForm);
    console.log(myForm.value);
  }
}
