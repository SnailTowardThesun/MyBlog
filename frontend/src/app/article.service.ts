import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Comment, Category } from './module/article';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';

interface ResponseData {
  code: number;
  data: object;
}

@Injectable()
export class ArticleService {

  generalUrl = 'http://localhost:8000/blog';

  constructor(private http: HttpClient) { }

  getAritcles(): Observable<ResponseData> {
    const url = this.generalUrl + '/article';

    return this.http.get<ResponseData>(url);
  }

  getArticleComments(article: Article): Observable<ResponseData> {
    const url = this.generalUrl + '/comment?article_id' + article.id;

    return this.http.get<ResponseData>(url);
  }

  getTopCategoeries(top: number): Category[] {
    const categories: Category[] = [

    ];

    return categories;
  }
}
