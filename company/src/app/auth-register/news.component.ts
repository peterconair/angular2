import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable'

import { NewsService } from './news.service';
import { News } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //news: Array<News> ;
  news: News[];
  errorMessage: string;
  isLoading: boolean = false;

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

  onSearch(keyword: string) {
    console.log(keyword);
    if (keyword != '') {
      this.news = this.news.filter(item => item.title.toLowerCase().includes(keyword));
    } else {
      this.getNews();
    }
  }
}
