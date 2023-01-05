import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  selectedProdId: number = 0;
  prod: any;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    // console.log(this.ActivatedRoute);
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      // console.log(params);
      this.selectedProdId = +params['id'];

      // const url = `https://fakestoreapi.com/products/${this.selectedProdId}`;
      // this.httpClient.get(url).subscribe((response) => {
      //   this.prod = response;
      // });
    });

    this.ActivatedRoute.data.subscribe((response: any) => {
      this.prod = response.productInfo;
    });
  }
}
