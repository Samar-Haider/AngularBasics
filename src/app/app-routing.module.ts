import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { ComponentIteractionTestComponent } from './component-interaction-test/component-iteraction-test.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { TemplateDrivenForms1Component } from './template-driven-forms1/template-driven-forms1.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch:'full'}, //default route
  {path: 'departments', component:EmployeeListComponent},
  {path:'employees',component:EmployeeDetailComponent},
  {path:'lstdepartments',component:DepartmentComponent},
  {path : './testmodule/testmodule.component', component:TestmoduleComponent},
  {path : './component-interaction-test/component-iteraction-test.component', component:ComponentIteractionTestComponent},
  {path : './pipes-test/pipes-test.component', component:PipesTestComponent},
  {path : './department/department.component', component:DepartmentComponent},
  {path : './department-overview/department-overview.component', component:DepartmentOverviewComponent},
  {path : './template-driven-forms1/template-driven-forms1.component', component:TemplateDrivenForms1Component},
  {path:'lstdepartments/:id',component:DepartmentDetailComponent,
  children: [
    {path:'overview', component:DepartmentOverviewComponent}
  ]},
  {path:'**',component:PagenotfoundComponent} //Should always be placed at the end of all the routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [EmployeeListComponent,EmployeeDetailComponent,DepartmentComponent,TestmoduleComponent,ComponentIteractionTestComponent,
  PipesTestComponent,DepartmentDetailComponent,DepartmentOverviewComponent,TemplateDrivenForms1Component,PagenotfoundComponent]