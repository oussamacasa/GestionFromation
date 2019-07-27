import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Session } from './session';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:8080/api';
@Injectable()
export class SessionHttpService {
  constructor(private http: Http, private httpclient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getSession(id: string): Observable<any> {
    const url = `${apiUrl}/onesession/`;
    return this.httpclient.get(url + id, httpOptions).pipe(
      map(this.extractData));
  }

  /*getTrackCount(track: string): Observable<number> {
    const url = `${apiUrl}/sessions/trackCount/${track}`;
    return this.httpclient.get(url, httpOptions).pipe(
      map(this.extractData)) as Observable<number>;
  }*/


  getSessionsObservable(): Observable<any> {
    const url = `${apiUrl}/sessions`;
    return this.httpclient.get(url, httpOptions)
      .pipe(map(this.extractData));
     // convertir la reponse Observable vers un Array de session
    //.subscribe();
  }

  //Nombre de sessions
  getLongSessionsObservable(): Observable<any> {
    const url = `${apiUrl}/nombresessions/`;
    return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData));
    }
    nombreTracks(track): Observable<any> {
      const url = `${apiUrl}/nombreTracks/`;
     return this.httpclient.get(url +track, httpOptions)
        .pipe(map(this.extractData));
   }

  addSession(session,formateur): Observable<any> {
    const url = `${apiUrl}/session/${formateur}`;
    return this.httpclient.post(url, session,  httpOptions)
      .pipe();
  }

  deleteSession(session): Observable<any> {
    const url = `${apiUrl}/session/`;
    return this.httpclient.delete(url + session._id, httpOptions)
      .pipe(map(this.extractData));
  }
  updateSession(session): Observable<any> {
    const url = `${apiUrl}/update/`;
    return this.httpclient.put(url + session._id, session, httpOptions)
      .pipe(map(this.extractData));
  }
}
