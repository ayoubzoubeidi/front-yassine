import {AddCategorieComponent} from '../../add-categorie/add-categorie.component';
import {Routes} from '@angular/router';
import {ArticleListComponent} from '../../article-list/article-list.component';
import {CategorieListComponent} from '../../categorie-list/categorie-list.component';
import {UtilisateursListComponent} from 'app/utilisateurs-list/utilisateurs-list.component';
import {AddUtilisateurComponent} from 'app/add-utilisateur/add-utilisateur.component';
import {AddArticleComponent} from '../../add-article/add-article.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'articles',     component: ArticleListComponent },
    { path: 'categories',  component: CategorieListComponent },
    { path: 'utilisateurs',  component: UtilisateursListComponent },
    { path: 'categories/add',  component: AddCategorieComponent },
    { path: 'utilisateurs/add',  component: AddUtilisateurComponent },
    { path: 'articles/add',     component: AddArticleComponent },
];
