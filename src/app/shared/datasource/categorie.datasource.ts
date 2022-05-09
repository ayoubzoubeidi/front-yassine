import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Categorie } from "../model/categorie.model";
import { CategorieService } from "../service/categorie.service";

export class CategorieDatasource implements DataSource<Categorie> {

    private categorieSubject = new BehaviorSubject<Categorie[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private categorieObservable: Observable<Categorie[]>) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Categorie[]> {
        return this.categorieSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.categorieSubject.complete();
        this.loadingSubject.complete();
    }

    loadCategories() {
        this.loadingSubject.next(true);
        this.categorieObservable.pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((categories: Categorie[]) => {
                this.categorieSubject.next(categories);
            });
    }

}
