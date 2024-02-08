import { Injectable } from '@angular/core';
import { Book } from './class/book';

import booksJson from '../assets/books.json';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books :Book[] = [];

  constructor() {
    booksJson.forEach((book) => {
      let newBook = new Book(book.id, book.author, book.country, book.language, book.link, book.pages, book.title, book.year);
      this.books.push(newBook);
    });
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book=>book.id == id);
  }
}
