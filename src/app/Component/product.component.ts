import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { ProductService } from '../Service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  produits:Product[]=[]
  chaineFilter:string=""
  newProduct:Product={
    id:this.produits.length+1,
    category:"",
    name:"",
    price:0,
    stock:0
  }
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.produits=this.productService.getProducts()
  }
 
  addProduct(){
    this.newProduct.id=this.produits.length+1
    this.productService.addProduct(this.newProduct)
    this.newProduct={
      id:this.produits.length+1,
      category:"",
      name:"",
      price:0,
      stock:0
    }
  }
}
