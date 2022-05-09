import { Component, OnInit } from '@angular/core';
import { CategorieDatasource } from 'app/shared/datasource/categorie.datasource';
import { CategorieService } from 'app/shared/service/categorie.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css'],
  providers: [MessageService]
})
export class CategorieListComponent implements OnInit {


  dataSource: CategorieDatasource;
  displayedColumns = ['id', 'name', 'options'];

  constructor(private categorieService: CategorieService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.dataSource = new CategorieDatasource(this.categorieService.getCategories());
    this.dataSource.loadCategories()
  }

  delete(id) {
    this.categorieService.deleteCategorie(id).subscribe(
        data => {
          this.showSuccess()
          this.dataSource.loadCategories()
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
