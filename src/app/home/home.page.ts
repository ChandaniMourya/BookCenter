import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import {bookdata} from '../../assets/Data/BootItems'
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClient } from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  book:any;
  constructor(private modalCtrl: ModalController,private http: HttpClient,private modelctrl: ModalController, private router: Router, private route: ActivatedRoute) {
    
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

  async editItems(){
    const modal = await this.modalCtrl.create({
      component:EditFormComponent,

    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

  }

  deleteItems(id:number){
    // http://localhost:8050/deleteBook/{bookid}
    this.http.delete("http://localhost:8050/deleteBook/" + id).subscribe((data)=>{
       this.book = data
    })
    console.log(id)
  }
}
