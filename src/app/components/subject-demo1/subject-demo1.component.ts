import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  templateUrl: './subject-demo1.component.html',
  styleUrls: ['./subject-demo1.component.css'],
})
export class SubjectDemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.subjectDemo();
  }
  subjectDemo() {
    let publisher1 = new AsyncSubject();
    publisher1.next('AAAAA');
    publisher1.next('BBBBB');
    let subscriber1 = publisher1.subscribe((val) =>
      console.log('subscriber-1 ', val)
    );
    publisher1.next('CCCCC');
    let subscriber2 = publisher1.subscribe((val) =>
      console.log('subscriber-2 ', val)
    );
    publisher1.next('DDDDD');
    publisher1.complete(); // stream gets closed
  }
}
