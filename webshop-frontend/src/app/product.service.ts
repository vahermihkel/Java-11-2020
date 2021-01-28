import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: {title: string, price: number, description: string, imageSrc: string, id: number}[];

  constructor() { }

  getProducts() {
    return this.products;
  }

  setProducts(products: {title: string, price: number, description: string, imageSrc: string, id:number}[]) {
    this.products = products;
  }
}
