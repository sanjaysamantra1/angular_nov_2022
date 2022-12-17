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
  searchText: string = '';

  employees = [
    { eId: 101, name: 'deepak', sal: 5000, gender: 'male' },
    { eId: 103, name: 'anjali', sal: 6000, gender: 'female' },
    { eId: 102, name: 'ranjan', sal: 8000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 7000, gender: 'female' },
  ];

  numbers1 = [20, 40, 10, 50, 30];
  numbers2 = [20, 40, 10, 50, 30];
}
