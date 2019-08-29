import { Component, OnInit } from '@angular/core';
import { UserFeedback } from './user-feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  userFeedback: UserFeedback;
  foodLst: String[];
  
  constructor() {
    this.foodLst = ["Chicken Briyani","Fish Briyani"];
    this.userFeedback = new UserFeedback();
   }

  ngOnInit() {
  }

}
