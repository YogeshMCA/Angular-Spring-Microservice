import { Component, OnInit } from '@angular/core';
import { UserFeedback } from './user-feedback';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  userFeedback: UserFeedback;
  foodLst: String[];
  
  constructor(private http: HttpClient) {
    this.foodLst = ["Chicken Briyani","Fish Briyani"];
    this.userFeedback = new UserFeedback();
   }

  ngOnInit() {
  }
  saveFeedback(){
    alert('Submitted');
    this.http.post<UserFeedback>('https://curr-conversion.cfapps.io/user-feedback-save',this.userFeedback).
    subscribe(response => {console.log(response)});
  }
}
