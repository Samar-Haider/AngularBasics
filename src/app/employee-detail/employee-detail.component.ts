import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _employeeService: EmployeeServiceService)
  {}

  public employees: any[] = []
  ngOnInit(): void {
    this.employees = this._employeeService.GetEmployees();
  }
}
