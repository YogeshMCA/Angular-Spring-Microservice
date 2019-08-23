import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';
import { Employer } from './employer';
import {Ccodes} from './ccodes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { Cconversion } from './cconversion';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
@Injectable()
export class CurrencyComponent implements OnInit {

  @Input('inr2usd') inr2USD : String;
  @Input('employer') emp: Employer[];
  sForm: String;
  sTo: String;
  user : User;
  public dateTime:String;

  cCode: Ccodes;
  cConversion : Cconversion;
  
  constructor(private http: HttpClient) {
    this.http = http;
    this.inr2USD = '30';
    setInterval(()=>{let date = new Date();this.dateTime = date.toDateString()+' '+date.toLocaleTimeString();},1000);
    this.user = new User('RamKumar','Erode',[9985674552,8754215778]);
    this.cCode = new Ccodes(['AUS','USD'],['EUR','INR']);
    console.log('Constructor Calling First');
   }
   

  ngOnInit() {
    this.inr2USD = '15';

    console.log('ngOnInit()->Fully initialized');
  }
  Convert(){
    this.getRate().subscribe(data => {
      this.cConversion = data;
      this.inr2USD = this.cConversion.calcAmount;
    });
    console.log(this.sForm);
  }
  public getRate(): Observable<Cconversion>{
    return this.http.get<Cconversion>('https://curr-conversion.cfapps.io/currency-converter-feign/from/'+this.sForm+'/to/'+this.sTo+'/quantity/1');
  }
}
