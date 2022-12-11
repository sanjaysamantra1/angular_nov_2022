import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = (data as any).default;
}
