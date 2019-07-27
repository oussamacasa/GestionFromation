import { Injectable } from '@angular/core';
import {SESSIONITEMS} from './sessions';
@Injectable({
  providedIn: 'root'
})
export class FakeSessionItemService {

  constructor() { }
  get() { return SESSIONITEMS; }
  getSession(id: number) {
  return SESSIONITEMS[id - 1];
}
  add(sessionItem) {
   sessionItem.id = SESSIONITEMS.length + 1;
   SESSIONITEMS.push(sessionItem);
  }

  delete(sessionItem) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
    }
  }

}
