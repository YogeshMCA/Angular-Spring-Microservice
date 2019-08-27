import { Component } from '@angular/core';
import { Employer } from './currency/employer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employer: Employer[];
  foodLst: String[];
  constructor(private router: Router){
    this.employer = [new Employer('HCL','Mumbai'),new Employer('TCS','Chennai')];
    this.foodLst = ["Chicken Briyani","Fish Briyani"];
  }
  navigateToCurrency(){
    this.router.navigate(['/currency']);
  }
}
