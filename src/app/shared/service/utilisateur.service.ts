import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Utilisateur} from '../model/utilisateur.model';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurService {


    constructor(private http: HttpClient) {
    }

    public getUtilsateurs() {
        return this.http.get<Utilisateur[]>('http://localhost:8080/users')
    }

    public addUtilisateur(utilisateur: Utilisateur) {
        return this.http.post('http://localhost:8080/users', utilisateur)
    }

    public deleteUtilisateur(id) {
        return this.http.delete('http://localhost:8080/users/' + id)
    }
}
