import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRouterModule} from './AppRountingModule';
import { UserService } from './currency/user.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent } from './feedback/search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {TextChangeDirective} from './text-change.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomGlobalException } from './custom-global-exception';
import { GlobalExceptionComponent } from './global-exception/global-exception.component';
import { OauthServiceService } from './OAuth/oauth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    FeedbackComponent,
    SearchComponent,
    TextChangeDirective,
    CustomPipePipe,
    GlobalExceptionComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    NgxPaginationModule
    ],
  providers: [OauthServiceService,UserService,{provide:ErrorHandler,useClass:CustomGlobalException}],
  bootstrap: [AppComponent]
})
export class AppModule { }
