import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Article} from '../model/formation.model';
import {Categorie} from '../model/categorie.model';

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient) {
    }

    public getArticles() {
        return this.http.get<Article>('http://localhost:8080/articles')
    }

    public saveArticle(article: Article) {

        return this.http.post('http://localhost:8080/articles', article)

    }

}
