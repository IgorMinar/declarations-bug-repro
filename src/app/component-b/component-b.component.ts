import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-component-b',
  templateUrl: 'component-b.component.html',
  styleUrls: ['component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  private valueB:string="value from B";
  
  constructor() { }

  ngOnInit() {
  }

}
