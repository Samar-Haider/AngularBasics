import { Component } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent {
  
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute) 
  {}
  public selectedId:any;
  public lstDepartments = 
  [
  {"Id":1, "Name": "HR", "Location":"Karachi"},
  {"Id":2, "Name": "Front-End Department", "Location":"Denmark"},
  {"Id":3, "Name": "Back-End Department", "Location":"Germany"},
  {"Id":4, "Name": "Admin Department", "Location":"UK"},
  ]
  
  ngOnInit(){
    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>
    {
      let id = params.get('id');
      this.selectedId = id;
    });
  }
  onSelect(d:any)
{
  //To pass a parameter while navigating we make use of the router service. It has a navigate method to which we can pass a link parameters array.
  //To read the paramter we make use of the activated route service. We use the snapshot of the current route and use the param api to read the required 
  //parameter. We can then bind it to a view using interpolation
this._router.navigate(['/lstdepartments',d.Id]);
  }

  isSelected(department:any)
  {
    return department.id == this.selectedId;
  }


}