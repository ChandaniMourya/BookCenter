import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // authService: any;
  registerForm: any;

  constructor(private router: Router, private apiService: ApiService) {
    console.log('const');
  }

  logindetails?: any;

  ngOnInit() {
    console.log('init');
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      //lastname:new FormControl(""),
      email: new FormControl(''),
      password: new FormControl(''),
      // cpwd:new FormControl(""),
    });
    console.log('sqdjwqn');
  }

  registerSubmitted() {
    console.log(this.registerForm.value);
    this.logindetails = this.registerForm.value;
    this.apiService.userReg(this.registerForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
