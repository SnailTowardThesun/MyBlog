import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Comment, Category } from './module/article';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';

interface Response {
  code: number;
  data: object;
}

@Injectable()
export class ArticleService {

  generalUrl = 'http://localhost:8000/blog';

  constructor(private http: HttpClient) { }

  getAritcleByPage(page: number): Observable<Response> {
    const url = this.generalUrl + '/article';

    return this.http.get<Response>(url);
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
