import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  employees: any[] = [{ id: 101, name: 'sanjay', sal: 5000 }];

  constructor() {}

  ngOnInit(): void {}
}
