import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  @Input() aa: number | undefined;
  @Input() bb: number | undefined;
  @Output() event1 = new EventEmitter();

  name: string = 'Sachin Tendulkar';

  senDataToParent() {
    this.event1.emit(this.name);
  }

  constructor() {}
  ngOnInit(): void {}
}
