import {Router} from '@angular/router';
import {CategorieService} from 'app/shared/service/categorie.service';
import {UtilisateurService} from '../shared/service/utilisateur.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PrimeNGConfig} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-add-utilisateur',
    templateUrl: './add-utilisateur.component.html',
    styleUrls: ['./add-utilisateur.component.scss'],
    providers: [MessageService]
})
export class AddUtilisateurComponent implements OnInit {

    participantForm = new FormGroup({
            dateN: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        tel: new FormControl('', [Validators.required]),
            cin: new FormControl('', [Validators.required]),
        }
    );

    constructor(private formBuilder: FormBuilder, private utilisateurService: UtilisateurService,
                private messageService: MessageService, private sessionService: CategorieService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log(this.participantForm.valid);
        if (this.participantForm.valid) {
            let data = this.participantForm.value;
            console.log(data);
            this.utilisateurService.addUtilisateur(data).subscribe(res => {
                this.showSuccess();
                setTimeout(() => {
                    this.router.navigateByUrl('/utilisateurs');
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
