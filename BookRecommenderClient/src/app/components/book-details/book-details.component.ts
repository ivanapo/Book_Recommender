import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/interfaces/Book';
import { RatingService } from 'src/app/services/rating.service';
import { RatingComponent } from '../rating/rating.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  public bookId: string = null;;


  constructor(private http: HttpClient, private bookService: BookService, private route: ActivatedRoute, private ratingService: RatingService, private dialog: MatDialog) { }


  book: Book | undefined;
  user = localStorage.getItem('currentUser');
  averageRating: number;


  ngOnInit() {
    this.bookId = String(this.route.snapshot.paramMap.get('id'));
    this.getbookdetails(this.bookId);
  }

  getbookdetails(_id: string) {
    if (_id) {
      this.bookService.getBook(_id).subscribe((res) => {
        this.book = res;
        if (this.book.ratings && this.book.ratings.length > 0) {
          this.averageRating = this.ratingService.getrating(this.book.ratings)
        }
      });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(RatingComponent, {
      width: '400px',
      data: {
        title: this.book.title,
        id: this.book.id
      }
    });

    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getbookdetails(this.bookId);
      }
    });
  }


  addFavourite() {
    const favourite = {
      userId: this.user,
      bookId: this.book.id
    }

    this.bookService.postFavorite(favourite).subscribe(x => {
      alert("Book added to favorites")
    })

  }

}


