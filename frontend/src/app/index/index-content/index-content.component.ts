import { Component, OnInit } from '@angular/core';
import { Article } from '../../module/article';
import { PageEvent } from '@angular/material';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  articles: Article[];
  articlesForShow: Article[];
  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions = [5, 10];

  // MatPaginator Output
  pageEvent: PageEvent;

  onPageChange(event: PageEvent) {
    console.log('current index: ' + event.pageIndex);
    console.log('the size of one page: ' + event.pageSize);
    console.log('totle number: ' + event.length);
  }

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAritcles().subscribe(r => {
      this.articles = r.data['article'];
      this.articlesForShow = this.articles;
      this.length = this.articles.length;
    });
  }

  onLike(id) {
    console.log('like');
  }
  onDislike(id) {
    console.log('dislike');
  }
  onShare(id) {
    console.log('share');
  }
}
