import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any[];

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/home").subscribe(response => {
      console.log(response);
    })
  }

}
