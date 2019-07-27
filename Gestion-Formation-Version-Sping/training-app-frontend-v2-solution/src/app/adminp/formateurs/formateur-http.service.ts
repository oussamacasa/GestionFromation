import { Injectable } from '@angular/core';
import { Formateur } from './formateur';
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Http} from '@angular/http';
import { Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/apif';
@Injectable()
export class FormateurHttpService {

  constructor( private http: Http, private  httpclient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
  getFormateur(id: string): Observable<any> {
    const url = `${apiUrl}/oneformateur/`;
    return this.httpclient.get(url +id, httpOptions).pipe(
      map(this.extractData));
  }
    getFormateursObservable(): Observable<any> {
      const url = `${apiUrl}/formateurs`;
      return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de formateur
        //.subscribe();
    }
    getLongFormateursObservable(): Observable<any> {
      const url = `${apiUrl}/nombreformateurs/`;
      return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData));
      }
    addFormateur(formateur): Observable<any> {
      const url = `${apiUrl}/formateur`;
      return this.httpclient.post(url, formateur, httpOptions)
        .pipe();
    }
    deleteFormateur(_id): Observable<any> {
      const url = `${apiUrl}/formateur/`;
     return this.httpclient.delete(url +_id, httpOptions)
        .pipe(map(this.extractData));
   }
    updateFormateur(formateur): Observable<any> {
      const url = `${apiUrl}/formateur/update/`;
      return this.httpclient.put(url + formateur._id, formateur, httpOptions)
       .pipe(map(this.extractData));
   }
}
