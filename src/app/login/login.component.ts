import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  isLogin : boolean = true;

  loginForm = this.fb.group({
    'email' : ['', Validators.required],
    'password' : ['', Validators.required],
    // confirmPassword : ['', Validators.required],
    'role' : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth : AuthService,
    private router : Router){}

  ngOnInit(){
    // if(!this.isLogin) {
    //   this.loginForm.addControl('confirmPassword',[]);
    // }
  }

  onSubmit(){
    if(this.loginForm.valid) {
      
      if(this.loginForm.value.email && this.loginForm.value.password){

        if(this.isLogin) {
          this.auth.SignIn(this.loginForm.value.email, this.loginForm.value.password).then(response => {
            this.auth.GetToken().then(value => {
              localStorage.setItem('token', JSON.stringify(value));
              this.router.navigateByUrl('/');
            })
          });
        } else {
          if(this.loginForm.value.role)
          this.auth.SignUp(this.loginForm.value.email, this.loginForm.value.password,  this.loginForm.value.role).then(response => {
            this.auth.GetToken().then(value => {
              localStorage.setItem('token', JSON.stringify(value));
              this.router.navigateByUrl('/');
            })
          });
        }
        
      }
      
    }
  }

}
