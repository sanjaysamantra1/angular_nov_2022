import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { count, from, interval, max, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  templateUrl: './observable-demo1.component.html',
  styleUrls: ['./observable-demo1.component.css'],
})
export class ObservableDemo1Component implements OnInit {
  numbers: any;
  take5:any;

  constructor() {}

  ngOnInit(): void {
    this.f1();
  }
  f1() {
    let publisher1 = new Observable(function (observer) {
      observer.next('AAAAA');
      observer.next('BBBBB');
      observer.next('CCCCC');
      observer.next('DDDDD');
      observer.complete();
    });

    // subcriber
    /* let subscriber1 = publisher1.subscribe(
      (res)=>{console.log(res)}, // 4
      (err)=>{console.log(err)},
      ()=>{console.log('done...')},
    ); */

    let subscriber1 = publisher1.subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('done...'),
    });

    let cars = ['tata', 'honda', 'maruti', 'hundai'];
    let carsPublisher = from(cars);
    carsPublisher.subscribe((car) => console.log(car));

    let fruits = of('mango', 'banana', 'grapes', 'guava');
    fruits.subscribe((val) => console.log(val));

    this.numbers = interval(1000);
    this.take5 = this.numbers.pipe(take(5));
    // this.numbers.subscribe((val:any) => console.log(val));

    let rangePublisher = range(10, 20);
    rangePublisher.subscribe((val) => console.log(val));

    let all_nums = of(1, 3, 5, 7, 11, 13, 23, 27);
    let count_publisher = all_nums.pipe(count());
    let max_publisher = all_nums.pipe(max());
    count_publisher.subscribe(val=>console.log('no of items',val))
    max_publisher.subscribe(val=>console.log('max',val))


    // range(50,20).pipe(take(1)).subscribe(val=>alert(val));
  }
}
