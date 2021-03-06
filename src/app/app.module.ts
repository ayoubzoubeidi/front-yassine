import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {ArticleService} from './shared/service/article.service';
import {CategorieService} from './shared/service/categorie.service';
import {UtilisateurService} from './shared/service/utilisateur.service';
import {BlankComponent} from './blank/blank.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './shared/auth/authentication.service';
import {AuthorizationInterceptor} from './shared/auth/AuthorizationInterceptor';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        LoginComponent,
        BlankComponent,
    ],
    providers: [ArticleService, CategorieService, UtilisateurService, AuthenticationService, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthorizationInterceptor,
        multi: true

    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
