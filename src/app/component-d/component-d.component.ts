import { Component, OnInit, Input } from '@angular/core';

@Component({
  //uncomment line below and ng serve -prod will work
  //moduleId:module.id,
  
  selector: 'app-component-d',
  template: `
  <p>
    I'm component DDDD! with customValue: {{customValue}}
  </p>
  `
})
export class ComponentDComponent implements OnInit {

  @Input() customValue:string="";

  constructor() { }

  ngOnInit() {
  }

}
