import { Pipe, PipeTransform } from '@angular/core';
import { BookService } from './service/book.service';

@Pipe({
  name: 'getBookTitle',
  standalone: true
})
export class GetBookTitlePipe implements PipeTransform {

  constructor(private bookService: BookService) {}

  transform(id: number, ...args: any[]): string {
    let result = this.bookService.getBook(id)!.title;
    return result;
  }

}
