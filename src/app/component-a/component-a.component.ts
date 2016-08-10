import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-component-a',
  templateUrl: 'component-a.component.html',
  styleUrls: ['component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  private valueA:string="Value from A";

  constructor() { }

  ngOnInit() {
  }

}
