import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClient } from '@angular/common/http';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  book: any;

  constructor(
    private alertController: AlertController,
    private serviceCall: ApiService,
    private modalCtrl: ModalController,
    private http: HttpClient,
    private modelctrl: ModalController,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.serviceCall.getAllBooks().subscribe((data) => (this.book = data));
  }
  async additemspage() {
    let popup = this.modelctrl.create({
      component: AddBookComponent,
      cssClass: 'auto-height',
    });
    (await popup).present();
    (await popup).onDidDismiss().then(() => {
      console.log('added');
    });
  }
  async editItems(d) {
    console.log(d);
    const modal = await this.modalCtrl.create({
      component: EditFormComponent,
      componentProps: { edit: d },
    });
    modal.present();
  }
  handlerMessage = '';
  roleMessage = '';

  async deleteItems(id: number) {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete the book?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'YES',
          role: 'confirm',
          handler: () => {
            this.serviceCall.deleteBook(id).subscribe((res1: any) => {
              this.serviceCall.getAllBooks().subscribe((res2: any) => {
                this.book = res2;
              });
            });
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
