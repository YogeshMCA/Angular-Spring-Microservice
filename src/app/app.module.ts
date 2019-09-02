import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRouterModule} from './AppRountingModule';
import { UserService } from './currency/user.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent } from './feedback/search/search.component';
import {NgbModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    FeedbackComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    NgbModule,
    NgbAlertModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }