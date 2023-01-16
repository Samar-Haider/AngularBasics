import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch:'full'}, //default route
  {path: 'departments', component:EmployeeListComponent},
  {path:'employees',component:EmployeeDetailComponent},
  {path:'lstdepartments',component:DepartmentComponent},
  {path:'lstdepartments/:id',component:DepartmentDetailComponent},
  {path:'**',component:PagenotfoundComponent} //Should always be placed at the end of all the routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [EmployeeListComponent,EmployeeDetailComponent,DepartmentComponent,DepartmentDetailComponent]
