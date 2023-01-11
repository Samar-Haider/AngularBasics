import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _empService:EmployeeServiceService){}

  title = 'hello-world';
  public adminName = 'Samar Jafri';
  public message = "Yo";
  departmentData: any;
  ngOnInit(){
    
  }
}