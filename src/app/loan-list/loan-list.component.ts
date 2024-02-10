import { Component, Pipe, PipeTransform } from '@angular/core';
import { PaginatorInterface } from '../class/paginatorInterface';
import { Loan } from '../class/loan';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LoanService } from '../service/loan.service';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { GetBookTitlePipe } from '../get-book-title.pipe';
import { GetMemberNamePipe } from '../get-member-name.pipe';


@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    RouterLinkActive,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    GetBookTitlePipe,
    GetMemberNamePipe,
  ],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css'
})
export class LoanListComponent implements PaginatorInterface {
  loans :Loan[] = [];
  displayedLoans :Loan[] = [];
  length:number;
  pageSize:number = 10;
  pageIndex: number = 0;
  pageEvent: PageEvent;

  displayedColumns: string[] = ['id', 'member', 'book', 'date', 'duration', 'returned'];

  constructor(private loanService: LoanService) {}

  ngOnInit() {
    this.loans = this.loanService.getLoans();
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
    const part = this.loans.slice(start, end);
    this.displayedLoans = part;
  }
}
