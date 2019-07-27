import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../adminp/sessions/fake-session-item.service';
@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
sessionItems;
  constructor(private sessionItemService: FakeSessionItemService) { }
  ngOnInit() {
    this.sessionItems = this.sessionItemService.get();
  }
  

}
