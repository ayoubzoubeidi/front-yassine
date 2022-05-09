import {Article} from '../model/formation.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, catchError, finalize, Observable, of} from 'rxjs';
import {ArticleService} from '../service/article.service';

export class ArticleDatasource implements DataSource<Article> {

    private articleSubject = new BehaviorSubject<Article[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private formationService: ArticleService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Article[]> {
        return this.articleSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.articleSubject.complete();
        this.loadingSubject.complete();
    }

    loadArticles() {
        this.loadingSubject.next(true);
        this.formationService.getArticles().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((articles: Article[]) => {
                this.articleSubject.next(articles);
            });
    }

}
