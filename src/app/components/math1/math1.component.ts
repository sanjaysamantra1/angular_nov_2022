import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-math1',
  templateUrl: './math1.component.html',
  styleUrls: ['./math1.component.css'],
})
export class Math1Component implements OnInit {
  subResult: number = 0;

  constructor(private mathObj: MathService) {
    // Dependency Injection
  }

  ngOnInit(): void {
    const addResult = this.mathObj.add(2, 3);
    console.log(addResult);

    this.subResult = this.mathObj.sub(10, 2);
  }
}
