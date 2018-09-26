import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article, Category } from './module/article';
import { Observable } from 'rxjs/Observable';

interface ResponseData {
  code: number;
  data: object;
}

@Injectable()
export class ArticleService {

  // public apiURL = 'http://www.snailtown.me/blog';
  public apiURL = 'http://127.0.0.1:8000/blog';

  articles: Article[];
  categories: Category[];

  constructor(private http: HttpClient) {

  }

  public getAritcles() {
    const url = this.apiURL + '/articles';

    return this.http.get<ResponseData>(url);
  }

  public getCategoeries() {
    const url = this.apiURL + '/categories';

    return this.http.get<ResponseData>(url);
  }

  public getArticleComments(article: Article): Observable<ResponseData> {
    const url = this.apiURL + '/comment?article_id=' + article.id;

    return this.http.get<ResponseData>(url);
  }

  public getArticlesByCategory(name: string) {
    const url = this.apiURL + '/category?name=' + name;

    return this.http.get<ResponseData>(url);
  }

  public setComment(email: string, name: string, message: string) {
    const url = this.apiURL + '/register_comment';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ResponseData>(url, { 'email': email, 'name': name, 'message': message }, httpOptions);
  }
}
