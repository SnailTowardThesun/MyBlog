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
  private category: string;

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('category');
    this.articleService.getArticlesByCategory(param).subscribe(r => {
      this.articles = <Article[]>(r.data['article'])
    })

    this.category = param;

  }

}
