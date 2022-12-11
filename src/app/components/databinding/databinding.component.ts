import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles:['img{border:2px solid blue;border-radius:10px}'],
  styleUrls: ['./databinding.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'Sanjay Samantra';
  img_url: string =
    'https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg';

  flag: boolean = false;
  myType: string = 'password';
  num1: number = 0;
  num2: number = 0;
  msg: string = '';

  addToCart() {
    alert('Your Item is added to cart');
  }
  toggleFlag() {
    this.flag = !this.flag;

    if (this.flag) {
      this.myType = 'text';
    } else {
      this.myType = 'password';
    }
  }
  addResult: number = 0;
  addition(a: any, b: any) {
    this.addResult = +a + +b;
  }
}
