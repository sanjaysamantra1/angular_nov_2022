import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[clickcount]'
})
export class ClickcountDirective {

  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log( this.numberOfClicks++);
  }

}
