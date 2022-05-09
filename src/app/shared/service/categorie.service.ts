import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Categorie} from '../model/categorie.model';

@Injectable({
    providedIn: 'root'
})
export class CategorieService {

    constructor(private http: HttpClient) {
    }

    public getCategories() {
        return this.http.get<Categorie[]>('http://localhost:8080/categories')
    }

    public saveCategorie(categorie: Categorie) {
        return this.http.post('http://localhost:8080/categories', categorie)
    }

    public deleteCategorie(id) {
        return this.http.delete('http://localhost:8080/categories/' + id)
    }

}
