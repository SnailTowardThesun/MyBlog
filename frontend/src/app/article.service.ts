import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Comment, Category } from './module/article';
@Injectable()
export class ArticleService {

  generalUrl = "http://127.0.0.1:8000/blog";

  constructor() { }

  getAritcleByPage(page: number): Article[] {
    const arr: Article[] = [
    ];

    return arr;
  }

  getArticlePages(): number {
    return 0;
  }

  getArticleComments(article: Article): Comment[] {
    const comments: Comment[] = [

    ];

    return comments;
  }

  getTopCategoeries(top: number): Category[] {
    const categories: Category[] = [

    ];

    return categories;
  }
}
