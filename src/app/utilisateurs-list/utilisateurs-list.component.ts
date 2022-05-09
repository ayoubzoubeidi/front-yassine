import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurDatasource} from 'app/shared/datasource/utilisateur.datasource';
import {UtilisateurService} from 'app/shared/service/utilisateur.service';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {


  dataSource: UtilisateurDatasource;
  displayedColumns = ['id', 'cin', 'firstName' , 'lastName', 'tel', 'address'];

  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new UtilisateurDatasource(this.utilisateurService);
    this.dataSource.loadUtilisateurs();
  }
}
