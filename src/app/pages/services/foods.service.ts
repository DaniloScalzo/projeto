import { Injectable } from '@angular/core';
import { Food } from '../model/food';
import { HttpClient } from '@angular/common/http'
import { first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private readonly API = '/assets/foods.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Food[]>(this.API)
    .pipe(
      first(),
      tap(foods => console.log(foods))
    );
  }
}
