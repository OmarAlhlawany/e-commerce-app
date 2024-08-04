import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { PRODUCTS } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS;

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
