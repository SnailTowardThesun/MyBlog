import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Comment, Category } from './module/article';

interface Response {
  code: number,
  data: object
}

@Injectable()
export class ArticleService {

  generalUrl = "http://localhost:8000/blog";

  constructor(private http:HttpClient) { }

  getAritcleByPage(page: number): Article[] {
    const arr: Article[] = [
    ];

    var url = this.generalUrl + "/article"

    this.http.get<Response>(url).subscribe(code => console.log(code));

   // console.log(this.http.get<Response>(url));

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