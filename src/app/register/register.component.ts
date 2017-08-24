import { Component, OnInit } from '@angular/core';
import {Http,Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
pageTitle = "Register Page"
name = ""
password = ""
email = ""
data = []
constructor(private http:Http, private router: Router) {}
onSubmit() {
    let data = {
      'name':this.name,
      'email':'this.email',
      'password':'this.password'
    }
    this.http.post('http://localhost:3000/update', JSON.stringify(data)).map((res: Response) => {
      console.log('response',Response)
      this.router.navigateByUrl('/home-page');
    }).subscribe()



  }

  ngOnInit() {
  }

}
