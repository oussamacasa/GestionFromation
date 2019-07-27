import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fake-session-item.service';
import {SessionHttpService} from '../session-http.service';
import { FormateurHttpService } from '../../formateurs/formateur-http.service';
import { Formateur } from '../../formateurs/formateur';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {
  formateurItems: Observable<Formateur[]>;
  constructor(private sessionItemService: FakeSessionItemService, private  sessionhttp: SessionHttpService,
    private  formateurhttp: FormateurHttpService) { }
  ngOnInit() {
    this.formateurItems = this.formateurhttp.getFormateursObservable();
  }
addSession(sessionItem) {
    console.log(sessionItem['formateur']);
      const session = {
     "name": sessionItem['name'],
    "track":sessionItem['track'],
    "date":sessionItem['date'],
    "duree": sessionItem['duree'],
    "adress": sessionItem['adress'],
    "participants": sessionItem['participants'],
    "isCompleted": false
    };
    console.log(session);

    this.sessionhttp.addSession(session, sessionItem['formateur']).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }
}
