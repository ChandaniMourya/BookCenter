// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent implements OnInit {
//   logindetails:FormGroup;
//   constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) { }

//   ngOnInit() {
//       this.logindetails = this.fb.group({
//         'email': new FormControl(''),
//         'password': new FormControl('')
//       })
//   }
//   onSubmit(){
//     console.log(this.logindetails.value)
//     this.http.post("http://localhost:8050/findbyemail",this.logindetails.value).subscribe((result)=>{
//       console.log(result)
//       if(result == true){
//         this.router.navigate(["/home"])
//       }
//       else{
//         alert("you dont have an account");
//         this.router.navigate(["/Signup"])
//       }
//     })
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private apiserve: ApiService, private router: Router) {
    console.log('Cons');
  }

  ngOnInit() {
    console.log('ngoninti');
  }

  showError: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  logindetailSubmitted() {
    console.log('submit fun :-------------');

    console.log(this.loginForm.value);

    this.apiserve.loginUser(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        if (res) {
          this.router.navigate(['/home']);
        } else {
          this.showError = true;
        }
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
