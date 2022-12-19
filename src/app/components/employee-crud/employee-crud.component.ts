import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  employees: any[] = [
    { id: 101, name: 'sanjay', sal: 5000 },
    { id: 102, name: 'Siva', sal: 6000 }
  ];
  selectedEmp: any = {};

  constructor() {}

  ngOnInit(): void {}
}
