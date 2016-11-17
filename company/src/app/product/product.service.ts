import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product';

@Injectable()
export class ProductService {

  apiUrl: string = '';

  constructor(private http: Http) { }

  getApiUrl(): string {
    return this.apiUrl = 'http://codingthailand.com/api/get_courses.php';
  }

  getProducts() {
    console.log(this.apiUrl);
    return this.http.get(this.getApiUrl())
      .map((res: Response) => <Array<Product>>res.json())
      .catch(this.handleError);
  }
  private handleError(error: any) {
    return Observable.throw(error.json().message || 'Server Error');
  }
}
