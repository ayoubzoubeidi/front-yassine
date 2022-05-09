import {Article as Utilisateur} from '../model/formation.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, catchError, finalize, Observable, of} from 'rxjs';
import {UtilisateurService} from '../service/utilisateur.service';

export class UtilisateurDatasource implements DataSource<Utilisateur> {

    private utilisateurSubject = new BehaviorSubject<Utilisateur[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private utilisateurService: UtilisateurService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Utilisateur[]> {
        return this.utilisateurSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.utilisateurSubject.complete();
        this.loadingSubject.complete();
    }

    loadUtilisateurs() {
        this.loadingSubject.next(true);
        this.utilisateurService.getUtilsateurs().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((utiliateurs: Utilisateur[]) => {
                this.utilisateurSubject.next(utiliateurs);
            });
    }

}
