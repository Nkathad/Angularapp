import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-form.component.html'
})

export class LoginComponent {
  pageTitle = "Login Account"
  username = ""
  password = ""
  formSubmit(){
    if(this.username == "naresh" && this.password == "jiyanshi"){
      console.log("Hello JIyanshi");
    }
    else{
      console.log("Who Are You");
    }
  }
}
