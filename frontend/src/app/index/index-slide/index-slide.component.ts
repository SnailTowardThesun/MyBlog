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

  categories: Category[];
  articles: Article[];
  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAritcles().subscribe(res => {
      this.articles = <Article[]>res.data['article'];
    });

    this.articleService.getCategoeries().subscribe(res => {
      this.categories = <Category[]>res.data['categories'];
    });
  }

}
