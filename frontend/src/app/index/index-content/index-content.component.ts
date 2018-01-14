import { Component, OnInit } from '@angular/core';
import { Article } from '../../module/article';
import { ARTICLES } from '../../module/mock-aritcle';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  constructor() { }

  articles = ARTICLES;

  pageLength = 10;
  pageSize = 5;
  pageSizeOptions = [5, 10];

  pageEvent: PageEvent = {pageIndex: 0, pageSize: this.pageSize, length: this.pageLength};

  ngOnInit() {
  }
}