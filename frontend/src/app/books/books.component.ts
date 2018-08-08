import { Component, OnInit } from '@angular/core';
import { JsonBooksService } from '../jsonbooks.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = []
  constructor(private _jsonbooksService: JsonBooksService) { }

  ngOnInit() {
    this._jsonbooksService.getJsonBooks()
      .subscribe(
        res => this.books = res,
        err => console.log(err)
      )
  }

}
