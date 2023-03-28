import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { HelloWorld } from './interfaces/app/app.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private http: HttpClient) {}

    public title = 'FTE Application';
    public returnedString = '';

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
}
