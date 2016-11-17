import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { News } from './news';

@Injectable()
export class NewsService {

  apiKey: string = '0d3fddb8c8be44038294bbb42a3febd0';
  sortBy: string = 'top';
  source: string = 'cnn';
  apiUrl: string = '';

  constructor(private http: Http) { }

  getApiUrl(): string {

    
    return this.apiUrl = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;
     //return this.apiUrl = 'http://localhost:3000/articles/';


  }
  /*
    getNews() {
      console.log(this.apiUrl);
      return this.http.get(this.getApiUrl()).map((res: Response) => res.json().articles)
        .catch(
        (error: any) => Observable.throw(error.json().message || 'Server Error')
        );
    }
  */

  getNews() {
    console.log(this.apiUrl);
    return this.http.get(this.getApiUrl())
      .map((res: Response) => <Array<News>>res.json().articles)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    return Observable.throw(error.json().message || 'Server Error');
  }

}
