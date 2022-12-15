import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'saChIn teNdUlkAr';
  emp = { name: 'sanjay', age: 30, sal: 5000 };
  today = new Date();
  arr = [10, 20, 30, 40, 50, 60, 70];
  msg: string = '';

  cardinal: number = 21;
}
