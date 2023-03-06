import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { AuthService } from '../services/auth.service';


interface Control  { 
  type: string; 
  label: string; 
  fieldName: string; 
  icon : string;
  properties: FormControl<string | null>; 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  isLogin : boolean = true;
  loginForm : FormGroup;
  fields : Control[] = [];
  loginFields = [
      {
        type : 'text',
        label : 'Email Id',
        fieldName : 'email',
        icon: 'email',
        properties : new FormControl("", [Validators.required])
      },
      {
        type : 'password',
        label : 'Password',
        fieldName : 'password',
        icon: 'key',
        properties : new FormControl("", [Validators.required])
      },
  ];

  registrationFeilds = [
    ...this.loginFields,
    {
      type : 'password',
      label : 'Confirm Password',
      fieldName : 'confirmpassword',
      icon: 'key',
      properties : new FormControl("", [Validators.required])
    },
    {
      type : 'select',
      label : 'Role',
      fieldName : 'role',
      icon: '',
      properties : new FormControl("", [Validators.required])
    },
  ];

  constructor(
    private fb: FormBuilder,
    private auth : AuthService,
    private router : Router){}

  ngOnInit(){
    this.setForm();
  }

  toggleScreen(){
    this.isLogin = !this.isLogin;
    this.setForm();
  }

  setForm(){
    this.fields = this.isLogin ? this.loginFields : this.registrationFeilds;
    const formGroupFields = this.getFormControlsFields(this.fields);
    this.loginForm = new FormGroup(formGroupFields);
  }

  getFormControlsFields(fields : Control[]) {
      const formGroupFields = {};
      for (const field of Object.values(fields)) {
        console.log(field )
          formGroupFields[field?.fieldName] = field.properties;
      }
      return formGroupFields;
  }

  onSubmit() {
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
