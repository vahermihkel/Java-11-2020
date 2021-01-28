import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../home/database.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  constructor(private databaseService: DatabaseService,
     private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.onAddProduct(form.value);
  }

  onAddProduct(product: any) {
    this.databaseService.addProduct(product);
    this.router.navigateByUrl("home");
  }

}
