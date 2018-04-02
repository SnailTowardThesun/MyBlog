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

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    console.log(this.articleService);
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
