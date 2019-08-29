import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent } from './feedback/search/search.component';

const routes: Routes = [
    {path: 'currency',component:CurrencyComponent},
    {path: 'createFeedback',component: FeedbackComponent},
    {path: 'searchFeedback', component: SearchComponent}
    //{path:'',component:CurrencyComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRouterModule{}