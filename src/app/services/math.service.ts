import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  a = 10;
  private constructor() {}

  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
}
