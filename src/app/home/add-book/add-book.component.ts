import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  ProductForm:FormGroup;
  
  constructor(private apiCall:ApiService,private toastController: ToastController,private http: HttpClient, private fb: FormBuilder,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.ProductForm = this.fb.group({
      'bookname': new FormControl(''),
      'bookauthor': new FormControl(''),
      'bookdesc': new FormControl(''),
      'bookprice': new FormControl('')
      // 'bookimage': new FormControl('')

    })
  }

  onSubmit(){
    this.http.post("http://localhost:8050/addBook",this.ProductForm.value)
    .subscribe((result)=>{
      // console.log("add one book"+ this.ProductForm.value)
      this.apiCall.getAllBooks().subscribe((response)=>{
        console.log("response",response)
        
      })
    })
   
      // window.location.reload();
      setTimeout(
        function(){ 
          window.location.reload();
        }, 1000);
        
    // console.log(this.ProductForm.value)
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  async addBook(position: 'top'){
    const toast = await this.toastController.create({
      message: 'One book is Added',
      duration: 1500,
      position: position,
      color: 'primary'
      
    });

    await toast.present();
    
  }

}
