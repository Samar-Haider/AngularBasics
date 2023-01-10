import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  GetEmployees(){
    return [
      {"Id":1, "name":"Samar", "designation":"Software Engineer","Salary":40000},
      {"Id":1, "name":"Murtaza", "designation":"Auditor","Salary":50000},
      {"Id":1, "name":"Hamza", "designation":"Senior Software Engineer","Salary":20000}
    ];
  }
}
