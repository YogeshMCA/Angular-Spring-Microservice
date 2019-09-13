import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'appTextChange'
})
export class TextChangeDirective {

  
  constructor(public elementRef: ElementRef) {
    //console.log(elementRef);
    elementRef.nativeElement.innerText = "Custom Directives";
   }

}
