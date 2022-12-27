import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = 'http://localhost:3000/employees';
  
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url, { observe: 'body' }).pipe(
      map((employees:Employee[])=>{
        let formattedResponse = employees.map((emp:Employee)=>{
          return new Employee(emp.id,emp.firstName,emp.lastName,emp.email,emp.sal);
        })
        return formattedResponse;
      })
    )
  }	
}
