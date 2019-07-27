import { Component, OnInit } from '@angular/core';
import {ParticipantHttpService} from '../participant-http.service';
@Component({
  selector: 'app-participant-add-form',
  templateUrl: './participant-add-form.component.html',
  styleUrls: ['./participant-add-form.component.css']
})
export class ParticipantAddFormComponent implements OnInit {

  constructor(private  participanthttp: ParticipantHttpService) { }

  ngOnInit() {
  }
  addParticipant(participantItem) {
    console.log(participantItem['name']);
      const participant = {
     "name": participantItem['name'],
    "lastName":participantItem['lastName'],
    "email":participantItem['email'],
    "adress": participantItem['adress'],
    "tel": participantItem['tel'],
    };
      
    this.participanthttp.addParticipant(participant).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

}
