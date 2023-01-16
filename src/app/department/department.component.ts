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
  //To pass a parameter while navigating we make use of the router service. It has a navigate method to which we can pass a link parameters array.
  //To read the paramter we make use of the activated route service. We use the snapshot of the current route and use the param api to read the required 
  //parameter. We can then bind it to a view using interpolation
this._router.navigate(['/lstdepartments',d.Id]);
}
}