import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LoginComponent } from './components/login/login.component';
import { RecommendedBooksComponent } from './components/recommended-books/recommended-books.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ReviewedBooksComponent } from './components/reviewed-books/reviewed-books.component';
import { BookHomeComponent } from './components/books-home/books-home.component';

const routes: Routes = [
  { path: '',component: BookHomeComponent }, 
  { path: 'home', component: BookHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'recommended', component: RecommendedBooksComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'reviewed', component: ReviewedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
