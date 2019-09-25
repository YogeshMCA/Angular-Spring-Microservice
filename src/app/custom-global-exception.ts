import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable()
export class CustomGlobalException implements ErrorHandler{
    
    constructor(private injector: Injector){}

    handleError(error: Error| HttpErrorResponse): void {
        //throw new Error("Method not implemented.");
        let router = this.injector.get(Router);
        console.log('------Global Exception Calling---------');
        if(error instanceof HttpErrorResponse){
            if(!navigator.onLine){
                console.log('Offline Error');
            }else{
                console.log('4xx Error',error.statusText);
            }
            
        }
        else {
            console.log('Client Side Exception',error.message);
        }
        router.navigate(['/CustomError']);
    }
    
}
