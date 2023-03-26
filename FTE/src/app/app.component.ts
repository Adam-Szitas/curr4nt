import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient){}

  title = 'FTE Application';
  public returnedString: string = "";

  public getHelloWorldFromNest(): void{
    const url: string = 'http://localhost:3000';
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('content-type', 'text/html');

    this.http.get(url, {headers: headers}).pipe(
      map((data: any) => {
        this.returnedString = data.text;
      }),
      catchError(error => {
        console.error(error);
        return of(true);
      })
    ).subscribe()
  }
}
