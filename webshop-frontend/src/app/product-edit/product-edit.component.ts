import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let index = this.route.snapshot.paramMap.get('id');
    let product = this.productService.getProducts().find(product => product.id == (Number)(index));
    this.initForm(product);
  }

  initForm(product) {
    this.productEditForm = new FormGroup({
      name: new FormControl(product.name),
      description: new FormControl(product.description),
      price: new FormControl(product.price),
      imageSrc: new FormControl(product.imageSrc),
      isActive: new FormControl(product.isActive),
    });
  }

  onSubmit(form) {

  }

}
