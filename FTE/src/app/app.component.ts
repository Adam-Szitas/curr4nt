import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { HelloWorld } from './interfaces/app/app.types';
import { AuthService } from './services/auth/auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterForm } from './interfaces/auth/auth.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private http: HttpClient, private authService: AuthService) {}

    public registerForm: FormGroup = new FormGroup({});
    public title = 'FTE Application';
    public returnedString = '';

    public ngOnInit(): void {
        this.registerForm = new FormGroup({
            firstName: new FormControl<string>('', [Validators.required]),
            lastName: new FormControl<string>('', [Validators.required]),
            gender: new FormControl<string>('Male', [Validators.required]),
            nickName: new FormControl<string>('', [Validators.minLength(5), Validators.required]),
            birthDate: new FormControl<Date>(new Date(), [Validators.required]),
        });
    }

    public getHelloWorldFromNest(): void {
        const url = 'http://localhost:3000';
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('content-type', 'text/html');

        this.http
            .get<HelloWorld>(url, { headers })
            .pipe(
                map((data: HelloWorld) => {
                    this.returnedString = data.text;
                }),
                catchError((error) => {
                    console.error(error);
                    return of(true);
                })
            )
            .subscribe();
    }

    public register(): void {
        if (this.registerForm.valid) {
            this.authService.register(this.registerForm.getRawValue() as RegisterForm).subscribe();
        }
    }
}
