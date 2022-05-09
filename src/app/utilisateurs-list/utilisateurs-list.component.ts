import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurDatasource} from 'app/shared/datasource/utilisateur.datasource';
import {UtilisateurService} from 'app/shared/service/utilisateur.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-utilisateurs-list',
    templateUrl: './utilisateurs-list.component.html',
    styleUrls: ['./utilisateurs-list.component.css'],
    providers: [MessageService]
})
export class UtilisateursListComponent implements OnInit {


    dataSource: UtilisateurDatasource;
    displayedColumns = ['id', 'cin', 'firstName', 'lastName', 'tel', 'address', 'options'];

    constructor(private utilisateurService: UtilisateurService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.dataSource = new UtilisateurDatasource(this.utilisateurService);
        this.dataSource.loadUtilisateurs();
    }

    delete(id) {
        this.utilisateurService.deleteUtilisateur(id).subscribe(
            data => {
                this.showSuccess()
                this.dataSource.loadUtilisateurs()
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
