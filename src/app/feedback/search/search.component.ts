import { Component, OnInit } from '@angular/core';
import { UserFeedback } from '../user-feedback';
import { HttpClient } from '@angular/common/http';
import { ResponseMessage } from './response-message';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedField: String;
  fieldLst: String[];
  selectedValue: String;
  userFeedbk: UserFeedback[];
  userFeedbk1: UserFeedback;
  responseMessage: ResponseMessage;

  constructor(private http: HttpClient) {
    this.fieldLst = ["ID","Name","Email"];
  }

  ngOnInit() {
  }
  getDetails(){
    this.http.get<UserFeedback>('https://curr-conversion.cfapps.io/user-feedback-details/id/'+this.selectedValue).
    subscribe(data => {this.userFeedbk1 = data;this.userFeedbk = Array.of(this.userFeedbk1);});
  }

  getAllDetails(){
    this.http.get<UserFeedback[]>('https://curr-conversion.cfapps.io/user-feedback-details').
    subscribe(data => {this.userFeedbk = data;});
  }

  deleteDetail(usrFeedback: UserFeedback){
    this.http.get('https://curr-conversion.cfapps.io/user-feedback-delete/id/'+usrFeedback.id,{responseType:"text"}).
    subscribe(data =>{console.log(usrFeedback);this.userFeedbk.splice(this.userFeedbk.indexOf(usrFeedback),1);});
    
    
  }
}
