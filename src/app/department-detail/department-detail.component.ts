import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  constructor(private _activatedRoute:ActivatedRoute){}
  public departmentId: any; 
  ngOnInit()
  {
 
    let id = this._activatedRoute.snapshot.paramMap.get('id');
    this.departmentId = id;
  }


}
