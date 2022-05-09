import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ArticleService} from '../shared/service/article.service';
import {CategorieService} from '../shared/service/categorie.service';
import {Categorie} from '../shared/model/categorie.model';
import {DropdownModule} from 'primeng/dropdown';


@Component({
    selector: 'app-add-article',
    templateUrl: './add-article.component.html',
    styleUrls: ['./add-article.component.scss'],
    providers: [MessageService]
})
export class AddArticleComponent implements OnInit {

    articleGroup = new FormGroup({
            name: new FormControl('', [Validators.required]),
            prix: new FormControl('', [Validators.required]),
            nbstock: new FormControl('', [Validators.required]),
            categorie: new FormControl('', [Validators.required])
        }
    );

    categories: Categorie[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private articleService: ArticleService,
        private categorieService: CategorieService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.categorieService.getCategories().subscribe(
            data => {
                this.categories = data
                console.log(this.categories)
            }
        )
    }

    onSubmit() {
        console.log(this.articleGroup.value);
        if (this.articleGroup.valid) {
            const data = this.articleGroup.value;
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
