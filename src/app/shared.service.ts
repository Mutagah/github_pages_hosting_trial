// Ideally meant to solve the issue of sharing data between far fetched components. Direct sharing of data only happens between parent to child components.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  // The shared function
  calculate(firstNum: number, secondNum: number) {
    return firstNum + secondNum;
  }
}
