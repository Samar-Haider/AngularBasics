import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms1',
  templateUrl: './template-driven-forms1.component.html',
  styleUrls: ['./template-driven-forms1.component.css']
})
export class TemplateDrivenForms1Component {

  public blurTopicString = false;
  topics = ["Angular","React","Vue"];

  validateTopic(topic:string){
    if(topic === 'default'){ 
      this.blurTopicString = true;
    }
    else{  this.blurTopicString = false;}
  }

}