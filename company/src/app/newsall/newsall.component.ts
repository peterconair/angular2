import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable'

import { NewsService } from '../news/news.service';
import { News } from '../news/news';

@Component({
  selector: 'app-newsall',
  templateUrl: './newsall.component.html',
  styleUrls: ['./newsall.component.css']
})
export class NewsallComponent implements OnInit {
  news: News[];
  errorMessage:string;
  isLoading:boolean = false;

  isToggle: boolean = true;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.isLoading = true;
    this.newsService.getNews()
      .subscribe(observerNews => {
        this.news = observerNews;
        this.isLoading = false;
      },
      error => {
        this.errorMessage = error
        this.isLoading = false;
      });
  }



  toggleImage(): void {
    this.isToggle = !this.isToggle;
  }
}
