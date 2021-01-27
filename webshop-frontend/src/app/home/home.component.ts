import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { ProductService } from './product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any[];

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
      this.productList = response;
      console.log(response);
    });
  }

}
