import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  email: string;
  name: string;
  message: string;

  ngOnInit() {
  }

  onSubmit() {
    this.articleService.setComment(this.email, this.name, this.message).subscribe(r => {
      console.log(r.code);
    });
  }
}
