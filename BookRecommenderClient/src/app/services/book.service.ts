import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  


  constructor(private http:HttpClient) { }

  getBook(_id:string){
    return this.http.get<Book>(`https://localhost:7161/book?id=${_id}`);
  }

  postPage(pageIndex: number, pageSize: number) {
    return this.http.post("https://localhost:7161/Book/GetPaged", { pageIndex, pageSize });
  }

  postFavorite(favourite:any) {
    console.log(favourite);
    return this.http.post(`https://localhost:7161/User/OrderBook`,favourite);
  }

}
