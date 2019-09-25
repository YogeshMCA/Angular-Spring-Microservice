import { Component, OnChanges,SimpleChanges, OnInit, ViewChildren, QueryList, ContentChildren, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { Employer } from './currency/employer';
import { Router } from '@angular/router';
import { TextChangeDirective } from './text-change.directive';
import { OauthServiceService } from './OAuth/oauth-service.service';



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
  
    constructor(private router: Router,private authService:OauthServiceService){
    this.employer = [new Employer('HCL','Mumbai'),new Employer('TCS','Chennai')];
    this.conVal = '555';
  }
  navigateToCurrency(){
    this.router.navigate(['/currency']);
  }

  login(){
    this.authService.login();
  }
  
}
