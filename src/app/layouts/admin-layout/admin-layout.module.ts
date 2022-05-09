import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {CategorieListComponent} from '../../categorie-list/categorie-list.component';
import {UtilisateursListComponent} from 'app/utilisateurs-list/utilisateurs-list.component';
import {AddCategorieComponent} from 'app/add-categorie/add-categorie.component';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {PickListModule} from 'primeng/picklist';
import {ToastModule} from 'primeng/toast';
import {AddUtilisateurComponent} from 'app/add-utilisateur/add-utilisateur.component';
import {AddArticleComponent} from '../../add-article/add-article.component';
import {ArticleListComponent} from '../../article-list/article-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatIconModule,
        CalendarModule,
        PickListModule,
        DropdownModule,
        ToastModule
    ],
    declarations: [
        DashboardComponent,
        ArticleListComponent,
        CategorieListComponent,
        AddCategorieComponent,
        AddUtilisateurComponent,
        UtilisateursListComponent,
        AddArticleComponent,
    ]
})

export class AdminLayoutModule {
}
