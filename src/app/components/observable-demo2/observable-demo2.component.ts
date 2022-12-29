import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, forkJoin, map, mergeMap, of, range, take } from 'rxjs';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-observable-demo2',
  templateUrl: './observable-demo2.component.html',
  styleUrls: ['./observable-demo2.component.css'],
})
export class ObservableDemo2Component implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private mathService: MathService
  ) {}

  ngOnInit(): void {
    this.forkjoinDemo();
    this.mapDemo();
    this.mergeMapDemo();
  }

  forkjoinDemo() {
    let request1 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    let request2 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    let request3 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    forkJoin([request1, request2, request3]).subscribe(([res1, res2, res3]) => {
      console.log(res1, res2, res3);
    });
  }
  mapDemo() {
    let numbers = range(1, 10);
    let square = numbers.pipe(map((ele) => ele * ele));
    square.subscribe((val) => console.log(val));
  }
  mergeMapDemo() {
    //with mergeMap()
    let usersPublisher = of(1, 2, 3, 4);

    usersPublisher
      .pipe(
        concatMap((user) => {
          const url = `https://jsonplaceholder.typicode.com/users/${user}`;
          return this.httpClient.get(url); //inner observable
        })
      )
      .subscribe((userData) => {
        console.log(userData);
      });
  }
}
