import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpComponent } from './adminp/adminp.component';
import {RouterModule, Routes} from '@angular/router';
import {SessionHttpService} from './sessions/session-http.service';
import { ParticipantHttpService } from './participants/participant-http.service';
import {FormateurHttpService} from './formateurs/formateur-http.service';
const adminpRoutes: Routes = [
  {
    path: '',
    component: AdminpComponent,
    children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'sessions', 
          loadChildren: './sessions/sessions.module#SessionsModule' },
          { path: 'formateurs', 
          loadChildren: './formateurs/formateurs.module#FormateursModule' },
          { path: 'participants', 
          loadChildren: './participants/participants.module#ParticipantsModule' },
          { path: '',   redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminpRoutes),
    CommonModule
  ],
  declarations: [DashboardComponent, AdminpComponent],
  providers: [SessionHttpService,ParticipantHttpService,FormateurHttpService],
  bootstrap: [AdminpComponent]
})
export class AdminpModule { 
  constructor(private sessionhttp:SessionHttpService,
    private participanthttp:ParticipantHttpService,private formateurhttp:FormateurHttpService) { }
}
