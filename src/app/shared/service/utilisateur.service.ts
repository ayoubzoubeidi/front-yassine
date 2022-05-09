import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../model/formateur.model';
import { utilisateur } from '../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  constructor(private http: HttpClient) {
  }

  public getUtilsateurs() {
      return this.http.get<utilisateur[]>('http://localhost:8080/users')
  }

  public addUtilisateur(utilisateur: utilisateur) {
    return this.http.post('http://localhost:8080/users', utilisateur)
  }
}
