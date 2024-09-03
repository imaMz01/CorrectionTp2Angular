import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products:Product[]=[
    {id:1,name:"name1",category:"cat1",price:120,stock:10},
    {id:2,name:"name2",category:"cat1",price:100,stock:10},
    {id:3,name:"name3",category:"cat2",price:110,stock:10},
    {id:4,name:"name4",category:"cat2",price:120,stock:0},

  ]

  getProducts() : Product[]{
    return this.products
  }
  addProduct(product:Product){
    this.products.push(product)
  }
}
