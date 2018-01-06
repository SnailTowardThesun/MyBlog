import { Injectable } from '@angular/core';
import { Article, Comment, Category } from './module/article';

@Injectable()
export class ArticleService {

  constructor() { }

  getAritcleByPage(page: number): Article[] {
    var arr: Article[] = [
    ];

    return arr;
  }

  getArticlePages(): number {
    return 0;
  }

  getArticleComments(article: Article): Comment[] {
    var comments: Comment[] = [

    ];

    return comments;
  }

  getTopCategoeries(top: number): Category[] {
    var categories: Category[] = [

    ];

    return categories;
  }

}
