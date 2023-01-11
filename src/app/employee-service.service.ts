import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from './IDepartment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private _http: HttpClient) { }

  public fetchedDepartments: any;
  GetEmployees(){
    return [
      {"Id":1, "name":"Samar", "designation":"Software Engineer","Salary":40000},
      {"Id":1, "name":"Murtaza", "designation":"Auditor","Salary":50000},
      {"Id":1, "name":"Hamza", "designation":"Senior Software Engineer","Salary":20000}
    ];
  }

  GetDepartments(){
    return this._http.get('https://localhost:7033/department/GetAllDepartments');
  }
}
