import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { PaginatorInterface } from '../class/paginatorInterface';
import { Member } from '../class/member';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements PaginatorInterface{
  members :Member[] = [];
  displayedMembers :Member[] = [];
  length:number;
  pageSize:number = 8;
  pageIndex: number = 0;
  pageEvent: PageEvent;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
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
    const part = this.members.slice(start, end);
    this.displayedMembers = part;
  }

}
