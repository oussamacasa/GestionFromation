import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {ParticipantHttpService} from '../participant-http.service';

@Component({
  selector: 'app-participant-edit-form',
  templateUrl: './participant-edit-form.component.html',
  styleUrls: ['./participant-edit-form.component.css']
})
export class ParticipantEditFormComponent implements OnInit {
  id;
  private sub: any;
  participant:any;
  constructor(private router: Router, private route: ActivatedRoute, 
    private  participanthttp: ParticipantHttpService) { }
   ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
     this.id = params['id']; // (+) converts string 'id' to a number
   });
   console.log('Participant ID ' + this.id.toString());
     this.participanthttp.getParticipant(this.id.toString())
   .subscribe(data => {
     console.log(data);
     this.participant = data;
   });
 }
editParticipant(participantItem) {
   console.log(participantItem);
   participantItem._id = this.id;
   console.log('Participant ID' + participantItem._id);
   this.participanthttp.updateParticipant(participantItem).subscribe(res => {
       console.log(res);
     }, (err) => {
       console.log(err);
     });
    // this.router.navigate(['../../adminp/sessions/list']);
     //location.reload();
 }
}
