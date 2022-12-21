import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css'],
})
export class Math2Component implements OnInit {
  mulResult: number = 0;
  subResult: number = 0;

  constructor(private mathObj: MathService) {}

  ngOnInit(): void {
    // let mathObj = new MathService();
    console.log(this.mathObj.add(3, 4));
    this.mulResult = this.mathObj.mul(4, 5);
  }
  subtraction(a: any,b: any){
    this.subResult = this.mathObj.sub(a,b);
  }
}
