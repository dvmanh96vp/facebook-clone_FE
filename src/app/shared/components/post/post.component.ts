import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../core/models/article.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data!: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
