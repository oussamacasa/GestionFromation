import { Component, OnInit } from '@angular/core';
import { SessionHttpService } from '../sessions/session-http.service';
import { ParticipantHttpService } from '../participants/participant-http.service';
import { FormateurHttpService } from '../formateurs/formateur-http.service';
import { Observable } from 'rxjs';
import {Session} from '../sessions/session';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tracks = ['MEAN', 'Angular',
    'NodeJS', 'Android', 'Symphony', 'Laravel','Ionic','Android','Xamarin','Swift'];
  nSessions:Observable<any>;
  nParticipants:Observable<any>;
  nFormateurs:Observable<any>;
  nMean:Observable<any>;
  nAngular:Observable<any>;
  nNodeJS:Observable<any>;
  nAndroid:Observable<any>;
  nXamarin:Observable<any>;
  nSwift:Observable<any>;
  sessionItems: Observable<Session[]>;
 constructor(private sessionhttp:SessionHttpService,private participanthttp:ParticipantHttpService,
  private formateurhttp:FormateurHttpService ) {
   }
  ngOnInit() {
    
    this.nSessions=this.sessionhttp.getLongSessionsObservable();
    this.nParticipants=this.participanthttp.getLongParticipantsObservable();
    this.nFormateurs=this.formateurhttp.getLongFormateursObservable();

    this.nMean=this.sessionhttp.nombreTracks("MEAN");
    this.nAngular=this.sessionhttp.nombreTracks("Angular");
    this.nNodeJS=this.sessionhttp.nombreTracks("NodeJS");
    this.nAndroid=this.sessionhttp.nombreTracks("Android");
    this.nXamarin=this.sessionhttp.nombreTracks("Xamarin");
    this.nSwift=this.sessionhttp.nombreTracks("Swift");

    this.sessionItems= this.sessionhttp.getSessionsObservable();
   }
   
  }



