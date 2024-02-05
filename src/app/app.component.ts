import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import booksJson from '../assets/books.json';
import { Book } from './class/book';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library project';

  books :Book[] = [];

  ngOnInit() {
    booksJson.forEach((book) => {
      let newBook = new Book(book.author, book.country, book.language, book.link, book.pages, book.title, book.year);
      this.books.push(newBook);
    });
  }
}
