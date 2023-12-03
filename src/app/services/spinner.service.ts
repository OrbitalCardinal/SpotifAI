import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private requestsCount: number;

  constructor() {
    this.requestsCount = 0;
  }

  addRequest() {
    this.requestsCount++;
  }

  removeRequest() {
    this.requestsCount--;
  }

  getRequests(): number {
    return this.requestsCount;
  }
}
