import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/products.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = (data as any).default;

  p: number = 1;
  searchText: string = '';

  sortAsc() {
    this.products.sort((prod1: any, prod2: any) => prod1.price - prod2.price);
  }
  sortDesc() {
    this.products.sort((prod1: any, prod2: any) => prod2.price - prod1.price);
  }

  addToCart() {
    Swal.fire('Good job!', 'Your item is added to cart', 'success');
  }
}
