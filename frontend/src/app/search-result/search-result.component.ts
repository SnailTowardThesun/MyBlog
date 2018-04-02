import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../module/article';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  private articles: Article[];

  ngOnInit() {
    this.articleService.getArticlesByCategory(this.route.snapshot.paramMap.get('category')).subscribe(r => {
      this.articles = <Article[]>(r.data['article'])
    })
  }

}
