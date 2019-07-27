import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FakeSessionItemService} from '../fake-session-item.service';
import {SessionHttpService} from '../session-http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;
  constructor(private router: Router, private sessionItemService: FakeSessionItemService, private  sessionhttp: SessionHttpService) { }  
  ngOnInit() {
    console.log(this.session);
  }
  onDelete() {
  console.log(this.session);
  //this.sessionItemService.delete(this.session);
  this.sessionhttp.deleteSession(this.session).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
      this.router.navigate(['../../adminp/sessions/list']);
      location.reload();
  }
 /* reload() {
    location.reload();
  }*/
}

