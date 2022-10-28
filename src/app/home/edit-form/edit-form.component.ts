import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  name: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

}
