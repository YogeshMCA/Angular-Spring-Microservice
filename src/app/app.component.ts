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
  
  constructor(private router: Router){
    this.employer = [new Employer('HCL','Mumbai'),new Employer('TCS','Chennai')];
  }
  navigateToCurrency(){
    this.router.navigate(['/currency']);
  }
}
