import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  articlePath: string;

  ngOnInit() {
    this.articlePath =  'http://localhost:8000/blog' + '/article?path=' + this.route.snapshot.paramMap.get('path');
  }
}
