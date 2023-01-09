import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { FormsModule } from '@angular/forms';
import { ComponentIteractionTestComponent } from './component-iteraction-test/component-iteraction-test.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
@NgModule({
  declarations: [
    AppComponent,
    TestmoduleComponent,
    ComponentIteractionTestComponent,
    PipesTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
