import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {BlankComponent} from './blank/blank.component';
import {AuthGaurdService} from './shared/auth/auth-gaurd.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
            canActivate: [AuthGaurdService]
        }]
    },
    {
        path: '',
        component: BlankComponent,
        children: [

            {path: 'login', component: LoginComponent},

        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
