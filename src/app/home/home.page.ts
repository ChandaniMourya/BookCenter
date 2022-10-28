import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {bookdata} from '../../assets/Data/BootItems'
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  book:any;
  constructor(private http: HttpClient,private modelctrl: ModalController, private router: Router, private route: ActivatedRoute) {
    
  }
  ngOnInit(){
    let response = this.http.get("http://localhost:8050/getAllBooks");
    response.subscribe((data) => this.book = data)
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
