import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  
  constructor(private _router:Router) 
  {}
public lstDepartments = 
[
 {"Id":1, "Name": "HR", "Location":"Karachi"},
 {"Id":2, "Name": "Front-End Department", "Location":"Denmark"},
 {"Id":3, "Name": "Back-End Department", "Location":"Germany"},
 {"Id":4, "Name": "AdminDepartment", "Location":"UK"},
]

onSelect(d:any)
{
this._router.navigate(['/lstdepartments',d.Id]);
}
}