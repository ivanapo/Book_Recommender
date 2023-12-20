import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/Book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-books-box',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BookHomeComponent implements OnInit {

  books: Book[]= [];
  pageList = {
    pageIndex: 0,
    pageSize: 12,
  };

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listBooks();
  }


  listBooks() {

    this.bookService.postPage(this.pageList.pageIndex, this.pageList.pageSize).subscribe((res: any) => {
      this.books = res
    });
  }



  onPrevious() {
    if (this.pageList.pageIndex > 0) {
      this.pageList.pageIndex--;
      this.listBooks();
      console.log(this.pageList.pageIndex);
    }
  }

  onNext() {
    this.pageList.pageIndex++;
    this.listBooks();
    console.log(this.pageList.pageIndex);
  }


}