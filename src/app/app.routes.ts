import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  //{ path: 'first-component', component: FirstComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'member-list', component: MemberListComponent },
  { path: 'member-detail/:id', component: MemberDetailComponent },
  { path: 'loan-list', component: LoanListComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
