import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
public lstDepartments = 
[
 {"Id":1, "Name": "HR", "Location":"Karachi"},
 {"Id":1, "Name": "Front-End Department", "Location":"Denmark"},
 {"Id":1, "Name": "Back-End Department", "Location":"Germany"},
]
}
