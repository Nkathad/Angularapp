import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../search.service';
import { MoviepipePipe } from '../moviepipe.pipe';

@Component({
  selector: 'product-list',
  templateUrl: './main-product-list.component.html',
  styleUrls: ['./main-product-list.component.css'],
  providers: [SearchComponent, SearchService]
})
export class MainProductListComponent implements OnInit {
  pageTitle = "Our Product";
  productList = [];
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this._productService.getProductList()
        .subscribe(resProductData => this.productList = resProductData);

  }

}
