import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logindetails:FormGroup;
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {
      this.logindetails = this.fb.group({
        'email': new FormControl(''),
        'password': new FormControl('')
      })
  }
  onSubmit(){
    console.log(this.logindetails.value)
    this.http.post("http://localhost:8050/findbyemail",this.logindetails.value).subscribe((result)=>{
      console.log(result)
      if(result == true){
        this.router.navigate(["/home"])
      }
      else{
        alert("you dont have an account");
        this.router.navigate(["/Signup"])
      }
    })
  }

  
}
