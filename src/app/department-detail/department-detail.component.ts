import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  constructor(private _activatedRoute:ActivatedRoute, private _router: Router){}
  public departmentId: any; 
  ngOnInit()
  {

    // let id = this._activatedRoute.snapshot.paramMap.get('id');
    // this.departmentId = id;
    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>
    {
      let id = params.get('id');
      this.departmentId = id;
    });
  }
  previous()
  {

    let previousId = parseInt(this.departmentId) - 1;
    this._router.navigate(['/lstdepartments',previousId]);
  }
  next()
  {

    let nextId = parseInt(this.departmentId) + 1;
    this._router.navigate(['/lstdepartments',nextId]);
  }
}
