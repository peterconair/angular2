import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { NewsallComponent } from './newsall/newsall.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NewsComponent,
        CategoryComponent,
        LoginComponent,
        SlideComponent,
        ProductComponent,
        ProductDetailComponent,
        AboutComponent,
        StaffComponent,
        BestsellerComponent,
        NewsallComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: NewsComponent },
            { path: 'about', component: AboutComponent },
            { path: 'product', component: ProductComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: 'staff', component: StaffComponent },
            { path: 'newsall', component: NewsallComponent },
            { path: '**', redirectTo: '' }
        ], { useHash: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
