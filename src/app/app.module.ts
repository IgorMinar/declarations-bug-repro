import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a';
import { ComponentBComponent } from './component-b';
import { ComponentCComponent } from './component-c';
import { ComponentDComponent } from './component-d';


@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent, ComponentCComponent, ComponentDComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class MyAppModule {}
