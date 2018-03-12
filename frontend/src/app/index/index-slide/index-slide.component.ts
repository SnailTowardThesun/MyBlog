import { Component, OnInit } from '@angular/core';
import { Article, Category } from '../../module/article';
import { ARTICLES, CATEGORIES } from '../../module/mock-aritcle';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-index-slide',
  templateUrl: './index-slide.component.html',
  styleUrls: ['./index-slide.component.css']
})
export class IndexSlideComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

  }

}
