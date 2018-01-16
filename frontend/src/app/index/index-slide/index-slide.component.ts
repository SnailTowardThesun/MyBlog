import { Component, OnInit } from '@angular/core';
import { Article } from '../../module/article';
import { ARTICLES } from '../../module/mock-aritcle';

@Component({
  selector: 'app-index-slide',
  templateUrl: './index-slide.component.html',
  styleUrls: ['./index-slide.component.css']
})
export class IndexSlideComponent implements OnInit {

  constructor() { }
  articles = ARTICLES;
  ngOnInit() {
  }

}
