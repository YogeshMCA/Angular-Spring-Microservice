import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
    {path: 'currency',component:CurrencyComponent}
    //{path:'',component:CurrencyComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRouterModule{}