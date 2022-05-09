import {Router} from '@angular/router';
import {CategorieService} from 'app/shared/service/categorie.service';
import {UtilisateurService} from '../shared/service/utilisateur.service';
import {Formateur} from './../shared/model/formateur.model';
import {Participant} from './../shared/model/participant.model';
import {ParticipantService} from './../shared/service/participant.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PrimeNGConfig} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-add-categorie',
    templateUrl: './add-categorie.component.html',
    styleUrls: ['./add-categorie.component.scss'],
    providers: [MessageService]
})
export class AddCategorieComponent implements OnInit {

    categorieFrom = new FormGroup({
            name: new FormControl('', [Validators.required]),
        }
    );

    constructor(
        private formBuilder: FormBuilder, private messageService: MessageService, private categorieService: CategorieService,
        private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.categorieFrom.valid) {
            let data = this.categorieFrom.value;
            this.categorieService.saveCategorie(data).subscribe(res => {
                this.showSuccess();
                setTimeout(() => {
                    this.router.navigateByUrl('/categories');
                }, 2000);
            })

        } else {
            this.showError();
        }

    }

    showError() {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Oops Something went wrong!!'});
    }

    showSuccess() {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data saved!'});
    }
}
