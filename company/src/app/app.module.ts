import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import more "ReactiveFormsModule"" for reactive form. 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

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

import { NewsService } from './news/news.service';
import { ProductService } from './product/product.service';
import { ProductDetailService } from './product/product-detail.service';
import { ProductRateComponent } from './product/product-rate.component';
import { CustomspipePipe } from './shared/customspipe.pipe';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { Register3Component } from './register3/register3.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';

import {AuthGaurdService} from './auth-gaurd.service';








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
        NewsallComponent,
        NewsComponent,
        ProductRateComponent,
        CustomspipePipe,
        RegisterComponent,
        MemberComponent,
        Register3Component,
        AuthRegisterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,   /* Import more "ReactiveFormsModule"" for reactive form. */
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: NewsComponent },
            { path: 'about', component: AboutComponent },
            { path: 'product', component: ProductComponent },
            //   { path: 'product/:id', component: ProductDetailComponent },
            { path: 'product/:id/product_name/:product_name', component: ProductDetailComponent },
            { path: 'staff', component: StaffComponent },
            { path: 'newsall', component: NewsallComponent , canActivate : [AuthGaurdService] },  /*use can activate for protect not authorize to that link. */
            { path: 'register', component: RegisterComponent },
            { path: 'register2', component: MemberComponent },
            { path: 'reactive', component: Register3Component },
            { path: 'signup', component: AuthRegisterComponent },
            { path: '**', redirectTo: '' }
        ], { useHash: true })
    ],
    providers: [
        Title,
        NewsService,
        ProductService,
        ProductDetailService,
        AuthGaurdService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
