import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:8080/home");
  }

  addProduct(product: any): void {
    this.http.post<any>("http://localhost:8080/save", product ).subscribe()
  }
}
