import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ProductDetail } from './product-detail';

@Injectable()
export class ProductDetailService {

  apiUrl: string = '';

  constructor(private http: Http) { }

  getApiUrl(): string {
    return this.apiUrl = 'http://codingthailand.com/api/get_course_detail.php?course_id=';
  }

  getProductDetails(id: number) {
    return this.http.get(this.getApiUrl() + id)
      .map((res: Response) => <Array<ProductDetail>>res.json())
      .catch(this.handleError);

  }
  private handleError(error: any) {
    return Observable.throw(error.json().message || 'Server Error');
  }
}
