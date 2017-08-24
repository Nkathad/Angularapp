import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  private _url: string = "./apidata/employeedata.json";
  constructor(private _http: Http) {}
  getProductList(){
    return this._http.get(this._url)
      .map((res: Response) => res.json());
  }
}
