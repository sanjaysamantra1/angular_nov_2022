import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, switchMap, map } from 'rxjs';
interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}
@Component({
  selector: 'app-observable-demo3',
  templateUrl: './observable-demo3.component.html',
  styleUrls: ['./observable-demo3.component.css'],
})
export class ObservableDemo3Component implements OnInit {

  searchResult$: Observable<PeopleData> | undefined;
  search = new FormControl();
  searchFormGroup = new FormGroup({
    search: this.search,
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.searchResult$ = this.search.valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response) =>
        response.count > 0 ? response.results[0] : { name: 'No results' }
      ),
      map(
        (response) =>
          ({
            name: response.name,
            birthYear: response.birth_year,
            height: Number(response.height),
            weight: Number(response.mass),
            eyeColor: response.eye_color,
          } as PeopleData)
      )
    );
  }
}
