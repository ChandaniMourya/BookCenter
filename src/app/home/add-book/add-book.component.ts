import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  ProductForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.ProductForm = new FormGroup({
      'name': new FormControl(''),
      'author': new FormControl(''),
      'description': new FormControl(''),
      'price': new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.ProductForm.value)
  }

}
