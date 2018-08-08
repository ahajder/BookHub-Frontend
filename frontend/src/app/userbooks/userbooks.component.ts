import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-userbooks',
  templateUrl: './userbooks.component.html',
  styleUrls: ['./userbooks.component.css']
})
export class UserbooksComponent implements OnInit {

  books : Book[];
  displayedColumns = ['title', 'author', 'description'];

  constructor(private bookService: BookService,  private router: Router) { }

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks(){
    this.bookService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
        console.log('Data requested ...');
        console.log(this.books);
      });
    }

  editBook(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.fetchBooks();
    });
  }
}
