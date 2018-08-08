import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  book: any = {};
  updateForm: FormGroup;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute,  private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      author: '',
      description: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.bookService.getBookById(this.id).subscribe(res => {
        this.book = res;
        this.updateForm.get('title').setValue(this.book.title);
        this.updateForm.get('author').setValue(this.book.author);
        this.updateForm.get('description').setValue(this.book.description);
      });
    });
  }

  updateBook(title, author, description) {
    this.bookService.updateBook(this.id, title, author, description).subscribe(() => {
        this.router.navigate(['/userbooks']);
    });
  }

}
