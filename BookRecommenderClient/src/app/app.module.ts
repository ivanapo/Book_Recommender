import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RecommendedBooksComponent } from './components/recommended-books/recommended-books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ReviewedBooksComponent } from './components/reviewed-books/reviewed-books.component';
import { BookHomeComponent } from './components/books-home/books-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookHomeComponent,
    BookDetailsComponent,
    RecommendedBooksComponent,
    NavbarComponent,
    RatingComponent,
    FavouritesComponent,
    ReviewedBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
