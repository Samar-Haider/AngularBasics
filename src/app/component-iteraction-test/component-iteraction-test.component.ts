import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-iteraction-test',
  templateUrl: './component-iteraction-test.component.html',
  styleUrls: ['./component-iteraction-test.component.css']
})
export class ComponentIteractionTestComponent {
// @Input() public adminComponentName: any;
@Input('adminComponentName') public newName : any;
@Output() public childEvent = new EventEmitter();


public FireEvent()
{
  this.childEvent.emit("The child event has reached its parent component");
}
}
 