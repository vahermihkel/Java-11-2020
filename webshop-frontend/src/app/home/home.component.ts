import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any[];

  constructor(private databaseService: DatabaseService,
    private productService: ProductService) {
   }

  ngOnInit(): void {
    this.databaseService.getProducts().subscribe(response => {
      this.productList = response;
      this.productService.setProducts(this.productList);
    });
  }

}
