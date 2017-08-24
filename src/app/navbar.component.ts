import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {
  navList = [
    {manuItem: 'Home', url: 'home-page', className: 'naresh', someTitle: 'hello i'},
    {manuItem: 'Products', url: 'product-list', className: 'jiyanshi', someTitle: 'hello jiya'},
    {manuItem: 'Log In', url: 'login-page'},
    {manuItem: 'Sign Up', url: 'app-register'},
    {manuItem: 'Support', url: 'app-filterlist'}
  ];
  constructor() { }

  ngOnInit() {}
}
