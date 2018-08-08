import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonBooksService {
  private _jsonbooksUrl = "http://localhost:3000/api/books";

  constructor(private http: HttpClient) { }

  getJsonBooks() {
    return this.http.get<any>(this._jsonbooksUrl)
  }
}
