import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  articlePath: string;

  ngOnInit() {
    this.articlePath =  this.articleService.apiURL + '/article?path=' + this.route.snapshot.paramMap.get('path');
  }
}
