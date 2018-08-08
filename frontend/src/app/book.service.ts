import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  uri = 'http://localhost:3000/api/userbooks';

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(`${this.uri}/books`);
  }

  getBookById(id){
    return this.http.get(`${this.uri}/books/${id}`);
  }

  addBook(title, author, description){
    const book ={
      title: title,
      author: author,
      description: description
    };
    return this.http.post(`${this.uri}/books/add`, book);
  }

  updateBook(id, title, author, description){
    const book ={
      title: title,
      author: author,
      description: description
    };
    return this.http.post(`${this.uri}/books/update/${id}`, book);
  }

  deleteBook(id){
    return this.http.get(`${this.uri}/books/delete/${id}`);
  }
}
