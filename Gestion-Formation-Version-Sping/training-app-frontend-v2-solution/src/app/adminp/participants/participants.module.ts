import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantHttpService} from './participant-http.service';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantAddFormComponent } from './participant-add-form/participant-add-form.component';
import { ParticipantEditFormComponent } from './participant-edit-form/participant-edit-form.component';
import { ParticipantItemListComponent } from './participant-item-list/participant-item-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
const participantsRoutes: Routes = [
  {
    path: '',
    component: ParticipantsComponent,
    children: [
          { path: 'add', component: ParticipantAddFormComponent },
          { path: 'edit/:id', component: ParticipantEditFormComponent },
          { path: 'list', component: ParticipantItemListComponent },
          { path: '',   redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(participantsRoutes),
    CommonModule,FormsModule,
    HttpClientModule,
    HttpModule 
  ],
  declarations: [ParticipantsComponent, ParticipantItemListComponent, ParticipantAddFormComponent,
    ParticipantEditFormComponent],
    providers: [ParticipantHttpService],
})
export class ParticipantsModule { }
