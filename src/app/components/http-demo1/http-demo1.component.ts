import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  templateUrl: './http-demo1.component.html',
  styleUrls: ['./http-demo1.component.css'],
})
export class HttpDemo1Component implements OnInit {
  users: any = [];
  entries: any = [];
  columns: string[] = [];
  isLoading: boolean = false;

  constructor(private httpClient: HttpClient) {}

  fetchHighVolumeData() {
    this.isLoading = true;
    const url = 'https://api.publicapis.org/entries';
    this.httpClient.get(url).subscribe((responseObject: any) => {
      this.entries = responseObject.entries;
      this.columns = Object.keys(responseObject.entries[0]);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.getUsersJS();
    this.getUsersAngular();
  }
  getUsersJS() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  getUsersAngular() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    this.httpClient.get(url).subscribe((userData) => {
      console.log(userData);
      this.users = userData;
    });
  }
}
