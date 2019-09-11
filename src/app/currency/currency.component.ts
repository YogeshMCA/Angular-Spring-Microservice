import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})

export class CurrencyComponent implements OnInit {

  @Input('inr2usd') inr2USD : String;
  @Input('employer') emp: Employer[];
  sForm: String = 'USD';
  sTo: String = 'INR';
  public dateTime:String;
  cConversion : Cconversion;
  user: User;
  cCode: Ccodes;
  errorMessage: any;

  constructor(private http: HttpClient,userService: UserService) {
    this.http = http;
    this.user = userService.user;
    this.cCode = userService.cCode;
    //this.inr2USD = '30';
    setInterval(()=>{let date = new Date();this.dateTime = date.toDateString()+' '+date.toLocaleTimeString();},1000);
    console.log('Constructor Calling First');
   }
   

  ngOnInit() {
    //this.inr2USD = '15';
    console.log('ngOnInit()->Fully initialized');
  }
  Convert(){
    /*this.getRate().subscribe(data => {
      this.cConversion = data;
      this.inr2USD = this.cConversion.calcAmount;
    },
    error => {
        this.errorMessage = error;
    });*/
    this.inr2USD = '100';
    console.log(this.sForm);
  }
  public getRate(): Observable<Cconversion>{
    return this.http.get<Cconversion>('https://curr-conversion.cfapps.io/currency-converter-feign/from/'+this.sForm+'/to/'+this.sTo+'/quantity/1')
                    .catch(this.returnError);
  }

  public returnError(error: HttpErrorResponse){
    return Observable.throw(error.message || "Internal Server Error");
  }

  ngOnChanges(){
    console.log("Updated Value");
  }
}
