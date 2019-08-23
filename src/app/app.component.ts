import { Component } from '@angular/core';
import { Employer } from './currency/employer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employer: Employer[];
  constructor(){
    this.employer = [new Employer('HCL','Mumbai'),new Employer('TCS','Chennai')];
  }
}
