import { Component } from '@angular/core';
import { Employer } from './currency/employer';
import { Router } from '@angular/router';
import { UserFeedback } from './user-feedback';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employer: Employer[];
  foodLst: String[];
  userFeedback: UserFeedback;
  constructor(private router: Router){
    this.employer = [new Employer('HCL','Mumbai'),new Employer('TCS','Chennai')];
    this.foodLst = ["Chicken Briyani","Fish Briyani"];
    this.userFeedback = new UserFeedback();
  }
  navigateToCurrency(){
    this.router.navigate(['/currency']);
  }
}
