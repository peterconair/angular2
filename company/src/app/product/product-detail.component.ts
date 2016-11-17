import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs/Subscription'

import { ProductDetailService } from './product-detail.service';
import { ProductDetail } from './product-detail';


@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

    productDetails: ProductDetail[];
    id: number;
    product_name: string;
    errorMessage: string;
    subscriptRoute: Subscription;
    subscriptService: Subscription;

    constructor(private productDetailService: ProductDetailService, private route: ActivatedRoute
        , private location: Location) { }

    ngOnInit(): void {
        console.log("Do ngOnInit");

        //  this.subscriptRoute = this.route.params.subscribe(params => this.id = params['id']);
        this.subscriptRoute = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.product_name = params['product_name'];
            this.getProductDetails();
        });

        console.log("Do ngOnInit : " + this.id);
    }

    getProductDetails() {
        console.log("Do getProductDetails()");
        this.subscriptService = this.productDetailService.getProductDetails(this.id)
            .subscribe(observerProductDetails => this.productDetails = observerProductDetails,
            error => {
                this.errorMessage = <any>error;
            })
    }

    // รับเหตุการจาก product-rate componnent 
    onRateItemClick(rateItemFromChild) {
        alert(rateItemFromChild);
    }


    goBack() {
        this.location.back();
    }

    ngOnDestroy(): void {
        this.subscriptRoute.unsubscribe();
        this.subscriptService.unsubscribe();
    }

}
