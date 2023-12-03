import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, lastValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCallbackService {

  private httpClient = inject(HttpClient);

  constructor() { }

  async getData(): Promise<any> {
    return lastValueFrom(this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1"));
  }
}
