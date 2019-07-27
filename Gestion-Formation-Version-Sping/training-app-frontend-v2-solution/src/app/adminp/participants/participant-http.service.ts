import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Http} from '@angular/http';
import { Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/';
@Injectable()
export class ParticipantHttpService {

  constructor( private http: Http, private  httpclient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
  getParticipant(id: string): Observable<any> {
    const url = `${apiUrl}/oneparticipant/`;
    return this.httpclient.get(url +id, httpOptions).pipe(
      map(this.extractData));
  }
    getParticipantsObservable(): Observable<any> {
      const url = `${apiUrl}/participants`;
      return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData)); // convertir la reponse Observable vers un Array de participant
        //.subscribe();
    }
    getLongParticipantsObservable(): Observable<any> {
      const url = `${apiUrl}/nombreparticipants`;
      return this.httpclient.get(url, httpOptions)
        .pipe(map(this.extractData));
      }
    addParticipant(participant): Observable<any> {
      const url = `${apiUrl}/participant`;
      return this.httpclient.post(url, participant, httpOptions)
        .pipe();
    }
    deleteParticipant(_id): Observable<any> {
      const url = `${apiUrl}/participant/`;
     return this.httpclient.delete(url + _id, httpOptions)
        .pipe(map(this.extractData));
   }
    updateParticipant(participant): Observable<any> {
      const url = `${apiUrl}/participant/update/`;
      return this.httpclient.put(url + participant._id, participant, httpOptions)
       .pipe(map(this.extractData));
   }
}

