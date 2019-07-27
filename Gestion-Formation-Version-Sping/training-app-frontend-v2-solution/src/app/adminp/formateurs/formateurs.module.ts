import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurAddFormComponent } from './formateur-add-form/formateur-add-form.component';
import { FormateurEditFormComponent } from './formateur-edit-form/formateur-edit-form.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { FormateurItemListComponent } from './formateur-item-list/formateur-item-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {FormateurHttpService} from './formateur-http.service';
const formateursRoutes: Routes = [
  {
    path: '',
    component: FormateursComponent,
    children: [
          { path: 'add', component: FormateurAddFormComponent },
          { path: 'edit/:id', component: FormateurEditFormComponent },
          { path: 'list', component: FormateurItemListComponent },
          { path: '',   redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(formateursRoutes),
    CommonModule, FormsModule,
    HttpClientModule,
    HttpModule 
  ],
  declarations: [ FormateursComponent, FormateurItemListComponent,  FormateurAddFormComponent,
    FormateurEditFormComponent],
    providers: [FormateurHttpService],
})
export class FormateursModule { }
