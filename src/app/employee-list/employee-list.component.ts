import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = [];
  constructor(private _employeeService: EmployeeServiceService)
  {
  }
 
  ngOnInit(): void {
  this.employees = this._employeeService.GetEmployees();
  }
}
