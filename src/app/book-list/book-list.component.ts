import { Component } from '@angular/core';
import { PaginatorInterface } from '../class/paginatorInterface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

import { Book } from '../class/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements PaginatorInterface {
  books :Book[] = [];
  displayedBooks :Book[] = [];
  length:number;
  pageSize:number = 8;
  pageIndex: number = 0;
  pageEvent: PageEvent;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.iterator();
  }

  public handlePage(event:PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  public iterator() {
    const end = (this.pageIndex + 1) * this.pageSize;
    const start = this.pageIndex * this.pageSize;
    const part = this.books.slice(start, end);
    this.displayedBooks = part;
  }

  // Responsive ??
  // https://stackoverflow.com/questions/45188134/change-the-layout-or-cols-value-of-md-grid-list-based-on-screen-size
}
