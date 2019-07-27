import { Component, OnInit,Input } from '@angular/core';
import {ParticipantHttpService} from '../participant-http.service';
import { Router } from "@angular/router";
import { Participant } from '../participant';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-participant-item-list',
  templateUrl: './participant-item-list.component.html',
  styleUrls: ['./participant-item-list.component.css']
})
export class ParticipantItemListComponent implements OnInit {
  participantItems: Observable<Participant[]>;
  constructor(private router: Router, private  participanthttp: ParticipantHttpService) { }

  ngOnInit() {
    this.participantItems = this.participanthttp.getParticipantsObservable();
  }
  onDelete(id) {
    //console.log(this.participant);
    this.participanthttp.deleteParticipant(id).subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
        });
        this.router.navigate(['../../adminp/participants/list']);
        location.reload();
    }
}
