import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfereneceFieldListComponent } from './components/conferenece-field-list/conferenece-field-list.component';
import { ConfereneceListComponent } from './components/conferenece-list/conferenece-list.component';
import { CreateConfereneceComponent } from './components/create-conferenece/create-conferenece.component';

const routes: Routes = [
  {
    path: 'conferenece-field-list', component: ConfereneceFieldListComponent
  },
  {
    path: 'conferenece-list', component: ConfereneceListComponent
  },
  {
    path: 'create-conferenece', component: CreateConfereneceComponent
  },
  {
    path: '', redirectTo: 'create-conferenece'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfereneceAdminRoutingModule { }
