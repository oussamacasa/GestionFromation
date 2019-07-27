import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { FormsModule } from '@angular/forms';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import {FakeSessionItemService} from './fake-session-item.service';
import {SessionHttpService} from './session-http.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
const sessionsRoutes: Routes = [
  {
    path: '',
    component: SessionsComponent,
    children: [
          { path: 'add', component: SessionAddFormComponent },
          { path: 'edit/:id', component: SessionEditFormComponent },
          { path: 'list', component: SessionItemListComponent },
          { path: '',   redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(sessionsRoutes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule 
  ],
  declarations: 
  [SessionItemComponent,
   SessionItemListComponent,
   SessionsComponent,
   SessionAddFormComponent,
   SessionEditFormComponent],
  providers: [FakeSessionItemService, SessionHttpService],
  bootstrap: [SessionsComponent]

})
export class SessionsModule { }
