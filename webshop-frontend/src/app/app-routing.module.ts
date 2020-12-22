import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "add-product", component: ProductAddComponent },
  { path: "product/edit/:id", component: ProductEditComponent },
  { path: "product/:id", component: ProductViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }