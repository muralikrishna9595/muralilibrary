import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:9191/api/v1/books";

  constructor(private httpClient: HttpClient) { }

  createBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, book);
}

getBooksList(): Observable<Book[]>{
  return this.httpClient.get<Book[]>(`${this.baseURL}`);
}

deleteBook(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
getBookById(id: number): Observable<Book>{
  return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
}
updateBook(id: number, book: Book): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, book);
}
}
