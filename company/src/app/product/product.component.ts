import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Product[];
    constructor(private productService: ProductService, private router: Router) {

    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(observerProducts => this.products = observerProducts);
    }

    onShowProductDetail(product: Product) {
         //this.router.navigate(['/product', product.id]);
        this.router.navigate(['/product', product.id,'product_name', product.c_title]);
    }

}
