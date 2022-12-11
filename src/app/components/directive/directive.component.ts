import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  n: number = 5;
  flag: boolean = false;

  cars: string[] = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
  states: any[] = [
    { text: 'Andhra pradesh', val: 'AP' },
    { text: 'Uttar pradesh', val: 'UP' },
    { text: 'Odisha', val: 'OD' },
    { text: 'Karnataka', val: 'KA' },
    { text: 'Kerala', val: 'KL' },
  ];
  selectedState: string = 'AP';

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];
  getNewEmployees() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
      { eId: 102, name: 'sitaaaa', sal: 9000, gender: 'male' },
    ];
  }
  trackByEmpId(employee: any) { // functon name can be anything
    return employee.eId;
  }

  dayNumber: any = new Date().getDay();
}
