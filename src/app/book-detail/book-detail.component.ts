import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router'
import { Book } from '../class/book';
import { BookService } from '../book.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  selectedBook: Book;
  @Input() id: number;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!
    if(this.id){
      this.selectedBook = this.bookService.getBook(this.id)!;
    }
  }
}
