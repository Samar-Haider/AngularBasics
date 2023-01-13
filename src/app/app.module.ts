import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { FormsModule } from '@angular/forms';
import { ComponentIteractionTestComponent } from './component-interaction-test/component-iteraction-test.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { EmployeeServiceService } from './employee-service.service';
import {HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    TestmoduleComponent,
    ComponentIteractionTestComponent,
    PipesTestComponent,
    routingComponent,
    PagenotfoundComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
