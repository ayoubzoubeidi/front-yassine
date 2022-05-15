import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LoginModel} from '../model/login.model';
import {SignupRequest} from '../model/signup-request.model';

export class User {
    constructor(
        public status: string,
    ) {
    }

}

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {
    }

    authenticate(username, password) {

        const loginModel = new LoginModel(username, password)
        return this.httpClient.post<any>('http://localhost:8080/auth/signin', loginModel).pipe(
            map(
                userData => {
                    console.log(userData)
                    const tokenStr = 'Bearer ' + userData.token;
                    localStorage.setItem('token', tokenStr);
                    localStorage.setItem('username', loginModel.username);
                    return userData;

                }
            )
        );
    }

    createAccount(username, email, password) {
        const signupRequest = new SignupRequest(username, email, password)
        return this.httpClient.post('http://localhost:8080/auth/signup', signupRequest)
    }


    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        return !(token === null);
    }

    logOut() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
