import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

export class CustomGlobalException implements ErrorHandler{
    handleError(error: Error| HttpErrorResponse): void {
        //throw new Error("Method not implemented.");
        console.log('------Global Exception Calling---------');
        if(error instanceof HttpErrorResponse){
            if(!navigator.onLine){
                console.log('Offline Error');
            }else{
                console.log('4xx Error',error.statusText);
            }
            
        }
        else {
            console.log('Client Side Exception');
        }
    }
    
}
