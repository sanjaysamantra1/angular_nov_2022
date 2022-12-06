import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'Sanjay Samantra';
  img_url: string =
    'https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg';

  flag: boolean = false;

  addToCart() {
    alert('Your Item is added to cart');
  }
}
