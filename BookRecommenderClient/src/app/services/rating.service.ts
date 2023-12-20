import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

  getrating(ratings: any){

      const totalRatings = ratings.reduce((sum, rating) => sum + rating.rating, 0);
      return parseFloat((totalRatings / ratings.length / 2).toFixed(1));
  
  }

  rating(request:any):Observable<object>{
    return this.http.post("https://localhost:7161/User/RateBook",request)
  }

}
