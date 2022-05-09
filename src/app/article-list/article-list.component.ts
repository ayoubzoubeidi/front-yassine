import { Component, OnInit } from '@angular/core';
import {ArticleDatasource} from '../shared/datasource/article.datasource';
import {ArticleService} from '../shared/service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {


  dataSource: ArticleDatasource;
  displayedColumns = ['id', 'nom', 'prix', 'nbstock'];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.dataSource = new ArticleDatasource(this.articleService);
    this.dataSource.loadFormations()
  }
}
