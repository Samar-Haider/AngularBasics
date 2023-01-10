import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { FormsModule } from '@angular/forms';
import { ComponentIteractionTestComponent } from './component-iteraction-test/component-iteraction-test.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestmoduleComponent,
    ComponentIteractionTestComponent,
    PipesTestComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
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
