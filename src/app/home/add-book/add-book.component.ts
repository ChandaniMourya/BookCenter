import { Component, OnInit } from '@angular/core';
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
  ProductForm: FormGroup;

  constructor(
    private apiCall: ApiService,
    private toastController: ToastController,
    private http: HttpClient,
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.ProductForm = this.fb.group({
      bookname: new FormControl(''),
      bookauthor: new FormControl(''),
      bookdesc: new FormControl(''),
      bookprice: new FormControl(''),
      // 'bookimage': new FormControl('')
    });
  }

  onSubmit() {
    this.apiCall.addBook(this.ProductForm.value).subscribe((result: any) => {
      this.ProductForm = result;
    });

    // window.location.reload();
    // setTimeout(function () {
    //   window.location.reload();
    // }, 1000);

    // console.log(this.ProductForm.value)
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  async addBook(position: 'top') {
    const toast = await this.toastController.create({
      message: 'One book is Added',
      duration: 90000,
      position: position,
      color: 'primary',
    });

    await toast.present();
  }
}
