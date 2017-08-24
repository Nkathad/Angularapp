import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
  <header>
    <top-header></top-header>
  </header>
  `,
})
export class HeaderComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
