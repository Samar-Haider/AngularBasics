import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IDepartment } from '../IDepartment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = [];
  departmentData: any;
  constructor(private _employeeService: EmployeeServiceService)
  {
    
  }
 
  ngOnInit(): void {
  this.employees = this._employeeService.GetEmployees();
  this._employeeService.GetDepartments().subscribe(data => {
    // console.warn("data",data)
    // console.log(data);
    debugger;
    this.departmentData = data;
    console.log(this.departmentData);
  })
  }
}