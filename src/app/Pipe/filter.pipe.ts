import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/Product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products:Product[],name:string): Product[] {
    
    if(!products || !name){
      return products
    }
    return products.filter(product=>
       ( product.name.toLowerCase().includes(name.toLowerCase()) ||
       product.category.toLowerCase().includes(name.toLowerCase())
      )
     ) 
      ;
  }

}
