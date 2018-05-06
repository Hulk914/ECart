import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cartCount: number;
  productList = [];
  constructor(private appService: AppService){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts():any{
    this.appService.getProducts().subscribe((res)=>{
      this.productList = res.data;
      this.cartCount = res.count;
      console.log(this.productList);
    });
  }

  addToCart(product):any {
    var temp = {};
    this.cartCount++;
    console.log(this.cartCount);
    temp['name'] = product.name;
    temp['imageUrl'] = product.imageUrl;
    temp['price'] = product.price;
    console.log(product);
    this.appService.addProduct(product._id,temp).subscribe((res)=>{
      console.log(res);
      this.getProducts();
    });
    
  }

  removeCart(product):any{
    this.cartCount--;
    this.appService.removeProduct(product._id).subscribe((res)=>{
      console.log(res);
      this.getProducts();
    });
  }
}
