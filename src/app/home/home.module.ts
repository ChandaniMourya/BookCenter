import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AddBookComponent, EditFormComponent,NavbarComponent]
})
export class HomePageModule {}
