import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {bookdata} from '../../assets/Data/BootItems'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bookdata:any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.bookdata = bookdata;
  }
  additemspage() {
    this.router.navigate(['/add-items']);
  }
}
