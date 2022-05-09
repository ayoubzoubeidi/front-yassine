import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Participant } from "../model/participant.model";
import { Categorie } from '../model/categorie.model';

@Injectable()
export class CategorieService {

    constructor(private http: HttpClient) {
    }

    public getCategories() {
        return this.http.get<Categorie>('http://localhost:8080/categories')
    }

    public saveCategorie(categorie: Categorie) {
        return this.http.post('http://localhost:8080/categories', categorie)
    }

    public getSessions() {
        return this.http.get<Categorie>('http://localhost:8081/sessions')
    }

    public getParticipations(sessionId: string) {
        return this.http.get<Participant>('http://localhost:8081/sessions/' + sessionId + '/participants')
    }

    public getNotParticipations(sessionId: string) {
        return this.http.get<Participant>('http://localhost:8081/sessions/' + sessionId + '/not-participants')
    }

    public subscribeParticipation(sessionId: string, participantId) {
        return this.http.post('http://localhost:8081/sessions/' + sessionId + '/subscribe/' + participantId, null)
    }

    public unsubscribeParticipation(sessionId: string, participantId) {
        return this.http.post('http://localhost:8081/sessions/' + sessionId + '/unsubscribe/' + participantId, null)
    }
    public saveSession(session) {
        return this.http.post('http://localhost:8081/sessions/' , session);
    }

}
