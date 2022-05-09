import {Router} from '@angular/router';
import {CategorieService} from 'app/shared/service/categorie.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ArticleService} from '../shared/service/article.service';

@Component({
    selector: 'app-add-article',
    templateUrl: './add-article.component.html',
    styleUrls: ['./add-article.component.scss'],
    providers: [MessageService]
})
export class AddArticleComponent implements OnInit {

    categorieFrom = new FormGroup({
            name: new FormControl('', [Validators.required]),
            prix: new FormControl('', [Validators.required]),
            nbstock: new FormControl('', [Validators.required]),
        }
    );

    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private articleService: ArticleService,
        private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.categorieFrom.valid) {
            const data = this.categorieFrom.value;
            this.articleService.saveArticle(data).subscribe(res => {
                this.showSuccess();
                setTimeout(() => {
                    this.router.navigateByUrl('/articles');
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
