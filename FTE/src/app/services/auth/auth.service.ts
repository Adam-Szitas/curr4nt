import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/auth/auth.types';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) {}

    public register(formValues: RegisterForm): Observable<any> {
        const url = 'http://localhost:3000/api/auth/register';

        return this.http.post(url, formValues).pipe(
            catchError((error: Error) => {
                console.error(error);
                return of(false);
            })
        );
    }
}
