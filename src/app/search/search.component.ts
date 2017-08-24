import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productList: Object;
  searchTerm$ = new Subject<string>();
  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(productList => {
        this.productList = productList;
      });
  }

  ngOnInit() {
  }

}
