import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

    constructor(private bookService: BookService, private fb: FormBuilder, private router: Router) {
      this.createForm = this.fb.group({
        title: ['', Validators.required],
        author: '',
        description: ''
      });
    }

    addBook(title, author, description) {
      this.bookService.addBook(title, author, description).subscribe(() => {
        this.router.navigate(['/userbooks']);
      });
    }
  ngOnInit() {
  }

}
