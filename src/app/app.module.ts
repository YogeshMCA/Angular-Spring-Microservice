import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRouterModule} from './AppRountingModule';
import { UserService } from './currency/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
