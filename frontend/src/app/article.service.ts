import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Comment, Category } from './module/article';
import { Observable } from 'rxjs/Observable';

interface ResponseData {
  code: number;
  data: object;
}

@Injectable()
export class ArticleService {

  apiURL = 'http://localhost:8000/blog';

  public articles: Article[];
  public categories: Category[];

  constructor(private http: HttpClient) {
    this.getAritcles();
    this.getCategoeries();
  }

  private getAritcles() {
    const url = this.apiURL + '/articles';

    this.http.get<ResponseData>(url).subscribe(r => {
      this.articles = <Article[]>r.data['article']
    });
  }

  private getArticle(path) {
    const url = this.apiURL + '/article?' + path;

    return this.http.get<Response>(url);
  }

  public getArticleComments(article: Article): Observable<ResponseData> {
    const url = this.apiURL + '/comment?article_id' + article.id;

    return this.http.get<ResponseData>(url);
  }

  private getCategoeries() {
    const url = this.apiURL + '/categories';

    this.http.get<ResponseData>(url).subscribe(res => {
      this.categories = <Category[]>res.data['categories'];
    });
  }
}
