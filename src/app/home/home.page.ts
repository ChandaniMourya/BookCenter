import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {bookdata} from '../../assets/Data/BootItems'
import { AddBookComponent } from './add-book/add-book.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bookdata:any;
  constructor(private modelctrl: ModalController, private router: Router, private route: ActivatedRoute) {
    this.bookdata = bookdata;
  }
  async additemspage() {
    // this.router.navigate(['/add-items']);
    let popup = this.modelctrl.create({
      component: AddBookComponent,
      cssClass: "auto-height"
    });
    (await popup).present()

  }
}
