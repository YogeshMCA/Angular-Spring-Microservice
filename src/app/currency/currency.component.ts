import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, KeyValueDiffers, KeyValueDiffer, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { User } from './user';
import { Employer } from './employer';
import {Ccodes} from './ccodes';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
//import {Injectable} from '@angular/core';
import { Cconversion } from './cconversion';
import {UserService} from './user.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TextChangeDirective } from '../text-change.directive';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})

export class CurrencyComponent implements OnInit,OnChanges,DoCheck {
  
  @Input('inr2usd') inr2USD : String;
  @Input('employer') emp: Employer[];
  sForm: String = 'USD';
  sTo: String = 'INR';
  public dateTime:String;
  cConversion : Cconversion;
  user: User;
  cCode: Ccodes;
  errorMessage: any;
  differ: any;
  @ContentChild(TextChangeDirective) appTextChange: TextChangeDirective;
  @ViewChild('styleClass') styleClass: ElementRef;

  testObservable: Observable<String>;
  
  constructor(private http: HttpClient,private userService: UserService,private keyValDiffers: KeyValueDiffers) {
    this.http = http;
    this.user = userService.user;
    this.cCode = userService.cCode;
    this.inr2USD = '30';
    setInterval(()=>{let date = new Date();this.dateTime = date.toDateString()+' '+date.toLocaleTimeString();},1000);
    console.log('Constructor Calling First');
   }
   

  ngOnInit() {
    console.log('ngOnInit()->Fully initialized');
    this.testObservable = new Observable((function(observer){observer.next('15');observer.next('16');}));
    this.differ = this.keyValDiffers.find(this.emp).create(); // return KeyValueDiffer
    /* KeyValueDiffer is a differ that tracks changes made to an object over time. 
       It has a diff method to compute a difference between the previous state and the new object state.
    */
  }

  public multipleObservable(): Observable<any[]>{
    const testObservable = new Observable((function(observer){observer.next('15');observer.next('16');}));
    const emplyoerObservable = new Observable(observer=>{setTimeout(()=>{observer.next(this.emp);},1000);});
    return Observable.forkJoin([testObservable,emplyoerObservable]);
  }

  public singleSubscribe(){
    this.multipleObservable().subscribe(responseLst=>{
      console.log(responseLst[0]);
      //console.log(responseLst[1]);
    });
   
  }

  public getEmployer(): any{
    const emplyoerObservable = new Observable(observer=>{
        setTimeout(()=>{observer.next(this.emp);},10000);
    });
    return emplyoerObservable;
  }

  public employerSubscribe(){
    this.getEmployer().subscribe((employer: Employer[])=>{console.log(employer)});
    this.testObservable.subscribe((x)=>{console.log(x)});
  }
  Convert(){
    this.getRate().subscribe(data => {
      this.cConversion = data;
      this.inr2USD = this.cConversion.calcAmount;
    },
    error => {
        this.errorMessage = error;
    });
    console.log(this.sForm);
  }
  public getRate(): Observable<Cconversion>{
    return this.http.get<Cconversion>('https://curr-conversion.cfapps.io/currency-converter-feign/from/'+this.sForm+'/to/'+this.sTo+'/quantity/1')
                    .catch(this.returnError);
  }

  public returnError(error: HttpErrorResponse){
    return Observable.throw(error.message || "Internal Server Error");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChange Hook called when a property in parent component get updated, i.e updating value in parent view:");
    
  }
  ngDoCheck(){
    const diffVal = this.differ.diff(this.emp[0]);
    if(diffVal)
      diffVal.forEachChangedItem(k =>{console.log('Previous Value:'+k.previousValue+'Current Value:'+k.currentValue);});

    //console.log("ngDoCheck Hook called when a value in refrence object property get updated in parent view:");
  }
  ngAfterContentInit(){
    //console.log(this.appText.nativeElement) ;
    console.log(this.appTextChange.elementRef.nativeElement) ;
    this.styleClass.nativeElement.style.color = 'red';
  }
  ngAfterViewInit(){
    //this.styleClass.nativeElement.style.color = 'red';
    console.log(this.styleClass.nativeElement) ;
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Button Clicked');
  }
}
