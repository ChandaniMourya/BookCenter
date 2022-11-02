import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signup:FormGroup;
  constructor(private http:HttpClient,private fb:FormBuilder, private router:Router) { }

  ngOnInit() {

    this.signup= this.fb.group({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
      'conformpassword': new FormControl('')

    })
  }


  onSubmit(){
    this.http.post('http://localhost:8050/registration',this.signup.value).subscribe((result)=>{
      console.log(result)
    this.router.navigate(["/login"])

    });
  }
}
