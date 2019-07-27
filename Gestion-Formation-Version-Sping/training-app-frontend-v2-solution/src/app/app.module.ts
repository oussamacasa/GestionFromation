import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FakeSessionItemService} from './adminp/sessions/fake-session-item.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent},
  {
    path: 'adminp',
    loadChildren: './adminp/adminp.module#AdminpModule'
  },
   { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [FakeSessionItemService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
