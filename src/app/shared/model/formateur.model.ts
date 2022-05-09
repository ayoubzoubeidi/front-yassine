import {Organisme} from './organisme.model';
import { Categorie } from './categorie.model';

export class Formateur {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    organisme: Organisme;
    sessions: Categorie[];
    typeFormateur: string;


}
