import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getAllBooks(){
    return this.http.get("http://localhost:8050/getAllBooks")
  }
  deleteBook(id){
    return this.http.delete("http://localhost:8050/deleteBook/" + id)
  }
  // editBook(){
  //   return this.http.get("http://localhost:8050/updateBook");
  // }
}
 