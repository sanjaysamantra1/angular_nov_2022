import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common'

@Directive({
  selector: '[backbutton]',
})
export class BackbuttonDirective {
  
  constructor(private location: Location) {}

  @HostListener('click')
  clickHandler(e: any) {
    this.location.back();
  }
}
