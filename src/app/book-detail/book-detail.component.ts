import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router'
import { Book } from '../class/book';
import { BookService } from '../service/book.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DetailCardComponent } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    DetailCardComponent,
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
