import { Component, OnInit } from '@angular/core';
import { UserFeedback } from '../user-feedback';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    this.fieldLst = ["ID","Name","Email"];
  }

  ngOnInit() {
  }
  getDetails(){
    this.http.get<UserFeedback[]>('https://curr-conversion.cfapps.io/user-feedback-details/id/'+this.selectedValue).
    subscribe(data => {console.log(Array.from(data));});
  }

  getAllDetails(){
    this.http.get<UserFeedback[]>('https://curr-conversion.cfapps.io/user-feedback-details').
    subscribe(data => {this.userFeedbk = data;console.log(data);});

  }
}
