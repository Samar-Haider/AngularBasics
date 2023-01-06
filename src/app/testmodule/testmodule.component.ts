import { Component } from '@angular/core';

@Component({
  selector: 'app-testmodule',
  templateUrl: './testmodule.component.html',
  styleUrls: ['./testmodule.component.css']
})


export class TestmoduleComponent {
public name = 'Angular basics for Samar'
public buttonSettings = true;
public hasError = true;
public isImportant = true;
public isMessage = true;
public textBoxValue = "";
public showElement = false;
public setMultipleProperties =
{
  "text-success": !this.hasError,
  "text-error": this.hasError,
  "text-important": this.isImportant,
  "text-message" : this.isMessage,
}
public onclick(event: any)
{
  alert("Prompt !");
  console.log(event);
}

public logInputValue(value: any)
{
  console.log(value)
}
}
