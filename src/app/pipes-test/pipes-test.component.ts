import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent {
public name = "Syed Samar Haider Jafri";
public message = "Hello World";
public recentDate = new Date();
public person = 
{
  "firstname": "John",
  "lastname": "Travolta"
}
}
