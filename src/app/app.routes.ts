import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
  //{ path: 'first-component', component: FirstComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
