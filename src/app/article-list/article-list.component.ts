import {Component, OnInit} from '@angular/core';
import {ArticleDatasource} from '../shared/datasource/article.datasource';
import {ArticleService} from '../shared/service/article.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css'],
    providers: [MessageService]
})
export class ArticleListComponent implements OnInit {


    dataSource: ArticleDatasource;
    displayedColumns = ['id', 'nom', 'prix', 'nbstock', 'categorie', 'options'];

    constructor(private articleService: ArticleService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.dataSource = new ArticleDatasource(this.articleService);
        this.dataSource.loadArticles()
    }

    delete(id) {
        this.articleService.deleteArticle(id).subscribe(
            data => {
                this.showSuccess()
                this.dataSource.loadArticles()
            }, error => this.showError()
        )
    }

    showSuccess() {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Deleted!'});
    }

    showError() {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Oops Something went wrong!!'});
    }
}
