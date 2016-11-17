import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: Array<Product>;
  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts()
      .subscribe(observerProducts => this.products = observerProducts);
  }

  onShowProductDetail(event: Event, product: Product): void {
    console.log(product.c_title);
    this.router.navigate(['/product', product.id]);
    console.log(event.eventPhase);
    event.preventDefault();
  }

  selectedProduct(event: Event, product: Product): void {
    console.log("Do selectedProduct");
  //  this.router.navigate(['/product', product.id]);
     this.router.navigate(['/product', product.id,'product_name', product.c_title]);
    event.preventDefault();
    console.log(product.c_title);
    // console.log(event.defaultPrevented);
  }
}
