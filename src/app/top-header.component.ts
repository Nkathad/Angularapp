import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
})
export class TopHeaderComponent implements OnInit {
  searchname = ""
  constructor() {  }
  redirect(){
    window.location.href='product-list';
  }
  ngOnInit() {}
}
