import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'appTextChange'
})
export class TextChangeDirective {

  @Input() current: String;
  @Input() previous: String;
  
  constructor(public elementRef: ElementRef) {
    //console.log(elementRef);
    elementRef.nativeElement.innerText = "Custom Directives";
   }

}
