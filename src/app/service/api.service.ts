import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  addBook(book: any) {
    return this.http.post('http://localhost:8050/addBook', book);
  }
  getAllBooks() {
    return this.http.get('http://localhost:8050/getAllBooks');
  }

  deleteBook(id) {
    return this.http.delete('http://localhost:8050/deleteBook/' + id);
  }
  editBook(editedvalue: any) {
    return this.http.put('http://localhost:8050/updateBook', editedvalue.value);
  }

  private baseUrl = 'http://localhost:8050/';

  loginUser(details: any): Observable<object> {
    return this.http.post(`${this.baseUrl}` + `findbyemail`, details);
  }

  userReg(user: object): Observable<object> {
    console.log(user);

    return this.http.post(`${this.baseUrl}` + 'registration', user);
  }
}
