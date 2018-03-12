import { Component, OnInit } from '@angular/core';
import { Article, Category } from '../../module/article';
import { ARTICLES } from '../../module/mock-aritcle';
import { PageEvent } from '@angular/material';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  
  pageLength = 10;
  pageSize = 5;
  pageSizeOptions = [5, 10];

  pageEvent: PageEvent = { pageIndex: 0, pageSize: this.pageSize, length: this.pageLength };

  ngOnInit() {
    
  }
}
