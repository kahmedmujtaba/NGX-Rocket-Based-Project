import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return [
      {
        name: 'Ahmed',
        email: 'textvirus@gmail.com',
        age: '31'
      }
    ];
  }
}
