import {PageEvent} from '@angular/material/paginator';

export interface PaginatorInterface {
  length:number;
  pageSize:number;
  pageIndex: number;
  pageEvent: PageEvent;

  handlePage(event:PageEvent): void;
  iterator(): void;
}
