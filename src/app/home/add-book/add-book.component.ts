import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  ProductForm:FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.ProductForm = new FormGroup({
      'bookname': new FormControl(''),
      'bookauthor': new FormControl(''),
      'bookdesc': new FormControl(''),
      'bookprice': new FormControl(''),
      'bookimage': new FormControl('')

    })
  }

  onSubmit(){
    this.http.post("http://localhost:8050/addBook",this.ProductForm.value)
    .subscribe((result)=>{
      console.log("add one book"+ this.ProductForm.value)

    })
    console.log(this.ProductForm.value)
  }

  // deleteItems(){
  //   this.http.delete("http://localhost:8050/addBook")
    
  // }
}
