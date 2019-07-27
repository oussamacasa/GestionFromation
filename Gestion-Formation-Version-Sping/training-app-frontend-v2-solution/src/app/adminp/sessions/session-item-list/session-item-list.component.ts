import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fake-session-item.service';
import { Observable} from 'rxjs';
import {SessionHttpService} from '../session-http.service';
import {Session} from '../session';
@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems$: Observable<any>;
  constructor(private  sessionhttp: SessionHttpService) { }
  ngOnInit() {
    
      this.sessionItems$ = this.sessionhttp.getSessionsObservable();
      console.log("aaaaaaaaaaaaaaa"+this.sessionItems$);
      }

}
