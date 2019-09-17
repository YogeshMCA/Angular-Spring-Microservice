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
import { retry } from 'rxjs/operators/retry';
import { catchError } from 'rxjs/operators';

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

  basicObservable: Observable<any>;
  basicPromise: Promise<any>;
  
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
    this.basicObservable = new Observable(this.basicSubscribe);
    this.basicPromise = new Promise(this.basicThen);
    this.differ = this.keyValDiffers.find(this.emp).create(); // return KeyValueDiffer
    /* KeyValueDiffer is a differ that tracks changes made to an object over time. 
       It has a diff method to compute a difference between the previous state and the new object state.
    */
  }

  //Creating Observable at a basic level
  public basicSubscribe(basicObservable){
    console.log("Observable Executing");
  basicObservable.next(999);
  basicObservable.next("Error");
  basicObservable.next("Exception");
  basicObservable.complete();
 } //Creating Observable at a basic level

  public getEmployer(): any{
    //Observable return multiple values, but Promises return single value
    const emplyoerObservable = new Observable(observer=>{observer.next(this.emp);observer.next(50);});
    return emplyoerObservable;
  }

  public employerSubscribe(){
    this.getEmployer().subscribe(this.subscribeFunction);

    this.basicObservable.subscribe(this.nextFun,this.errorFun,this.completeFun);
    this.basicObservable.subscribe(this.nextFun,this.errorFun,this.completeFun);
  }

  public subscribeFunction(value: Employer[]){
      console.log(value);
  }
 public nextFun(value){
    console.log(value);
}
public errorFun(error){
  console.log(error);
}
public completeFun(){
  console.log("Completed Function");
}

public basicThen(resolve){
  console.log('Promise Executing');
  resolve('Basic Promise:1');
  resolve('Basic Promise:2');
}

public clickPromise(){
  this.basicPromise.then(this.resolveFun);
  this.basicPromise.then(this.resolveFun); //multicast - It won't execute the basicThen(), but the result will be same
}
public resolveFun(value){
  console.log(value);
}

  Convert(){
    this.getRate().subscribe(data => {
      this.cConversion = data;
      this.inr2USD = this.cConversion.calcAmount;
    });
    console.log(this.sForm);
  }
  public getRate(): Observable<Cconversion>{
    return this.http.get<Cconversion>('https://curr-conversion.cfapps.io/currency-converter-feign/from/'+this.sForm+'/to/'+this.sTo+'/quantity/1')
                      .pipe(retry(3))
                    
  }

  public returnError(error: HttpErrorResponse){
    return Observable.throw("Internal Server Error");
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
