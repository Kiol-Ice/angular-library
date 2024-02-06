import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

import booksJson from '../../assets/books.json';
import { Book } from '../class/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books :Book[] = [];
  displayedBooks :Book[] = [];
  length:number;
  pageSize:number = 16;
  pageIndex: number = 0;
  pageEvent: PageEvent;

  ngOnInit() {
    booksJson.forEach((book) => {
      let newBook = new Book(book.author, book.country, book.language, book.link, book.pages, book.title, book.year);
      this.books.push(newBook);
    });
    this.iterator();
  }

  public handlePage(event:PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    const part = this.books.slice(start, end);
    this.displayedBooks = part;
  }
}
