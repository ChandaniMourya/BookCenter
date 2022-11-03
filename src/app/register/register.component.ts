import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  authService: any;
  registerForm: any;

  constructor( 
                private router: Router , private apiService:ApiService) { }

  logindetails? : any;


  ngOnInit() {
    this.registerForm = new FormGroup({
      name:new FormControl(""),
      //lastname:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      // cpwd:new FormControl(""),
    })
 
  
   }
   registerSubmitted(){
    console.log(this.registerForm.value);
    this.logindetails = this.registerForm.value

    // console.log(this.logindetails);
    
    // this.authService.registerUser(this.registerForm.value);
    //this.router.navigateByUrl('/products');

    this.apiService.userReg(this.registerForm.value).subscribe((res)=>{
      console.log(res);
      
    })

   }
    
  
}

