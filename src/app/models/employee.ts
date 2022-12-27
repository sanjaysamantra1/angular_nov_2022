// Model Class
export class Employee {
   id: number;
   firstName: string;
   lastName: string;
   email: string;
   sal: number;

  constructor(id: number, firstName: string, lastName: string,email: string, sal: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.sal = sal;
  }
  getFullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }
  getYearlySalary(): number {
    return  this.sal * 12;
  }
}
