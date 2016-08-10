import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-c',
  template: `
  <p>
    I'm component CCCC! with customValue: {{customValue}}
  </p>`
})
export class ComponentCComponent implements OnInit {

  @Input() customValue:string="";

  constructor() { }

  ngOnInit() {
  }

}
