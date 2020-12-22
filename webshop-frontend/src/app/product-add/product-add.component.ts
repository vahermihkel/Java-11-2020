import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product = {name: "Beer", description: "Cold beer", price: 5.99, imageSrc: "", isActive: true};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post("http://localhost:8080/save", this.product ).subscribe(response => {
      console.log(response);
     })
  }

}
