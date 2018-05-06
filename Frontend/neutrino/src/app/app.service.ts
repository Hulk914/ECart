import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private _http: HttpClient) { }

  _url = "http://localhost:3000/api/products"
  getProducts(): any {
    return this._http.get(this._url)
      .map((response) => {
        return response;
      });
  }

  addProduct(productId,prod): any{
    return this._http.post(this._url+"/"+productId,prod).map((response)=>{
      return response;
    });
  }

  removeProduct(productId):any{
    return this._http.delete(this._url+"/"+productId).map((response)=>{
      return response;
    });
  }
}
