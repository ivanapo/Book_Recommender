import { Rating } from "./Rating"


export interface Book {
    id: string
    title: string
    author: string
    yearOfPublication: number
    publisher: string
    imageUrl: string
    ratings: Rating[]
  }
  

  