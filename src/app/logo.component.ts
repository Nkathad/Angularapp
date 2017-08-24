import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-component',
  templateUrl: 'logo.component.html',
})
export class LogoComponent implements OnInit {
  logoImg = "../assets/images/gosh-logo.png";
  constructor() {}

  ngOnInit() {}
}
