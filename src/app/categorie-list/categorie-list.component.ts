import { Component, OnInit } from '@angular/core';
import { CategorieDatasource } from 'app/shared/datasource/categorie.datasource';
import { CategorieService } from 'app/shared/service/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {


  dataSource: CategorieDatasource;
  displayedColumns = ['id', 'name'];

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.dataSource = new CategorieDatasource(this.categorieService.getCategories());
    this.dataSource.loadCategories()
  }
}
