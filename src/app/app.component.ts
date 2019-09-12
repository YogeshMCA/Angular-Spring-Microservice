import { Component, OnChanges,SimpleChanges, OnInit } from '@angular/core';
import { Employer } from './currency/employer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    
  }
  
  employer: Employer[];
  conVal: String;
  
  constructor(private router: Router){
    this.employer = [new Employer('HCL','Mumbai'),new Employer('TCS','Chennai')];
    this.conVal = '555';
  }
  navigateToCurrency(){
    this.router.navigate(['/currency']);
  }

}
