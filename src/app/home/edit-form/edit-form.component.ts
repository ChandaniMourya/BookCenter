import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  name: string;
  editedvalue: any;
  editform: FormGroup;
  constructor(
    private toastController: ToastController,
    // private http: HttpClient,
    private fb: FormBuilder,
    private params: NavParams,
    private modalCtrl: ModalController,
    private apiCall: ApiService
  ) {
    this.editedvalue = this.params.get('edit');
    // console.log(this.editedvalue.bookid)
    console.log('inside the constructor ');
    this.editform = this.fb.group({
      bookid: new FormControl(this.editedvalue.bookid),
      bookname: new FormControl(this.editedvalue.bookname),
      bookauthor: new FormControl(this.editedvalue.bookauthor),
      bookdesc: new FormControl(this.editedvalue.bookdesc),
      bookprice: new FormControl(this.editedvalue.bookprice),
    });
    console.log('editform', this.editform.value);
  }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss('cancel');
  }

  onSubmit() {
    console.log('msg', this.apiCall.editBook);
    this.apiCall.editBook(this.editform.value).subscribe((result) => {
      console.log('add one book' + this.editform.value);
      return result;
    });
    // setTimeout(function () {
    //   window.location.reload();
    // }, 1000);
  }

  async updatedBookAlert() {
    const toast = await this.toastController.create({
      message: 'A Book is updated',
      duration: 1500,
      color: 'primary',
    });

    await toast.present();
  }
}
