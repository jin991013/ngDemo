import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfereneceAdminRoutingModule } from './conferenece-admin-routing.module';
import { CreateConfereneceComponent } from './components/create-conferenece/create-conferenece.component';
import { ConfereneceListComponent } from './components/conferenece-list/conferenece-list.component';
import { ConfereneceFieldListComponent } from './components/conferenece-field-list/conferenece-field-list.component';
import { ConfereneceAdminComponent } from './conferenece-admin.component';


@NgModule({
  declarations: [CreateConfereneceComponent, ConfereneceListComponent, ConfereneceFieldListComponent, ConfereneceAdminComponent],
  imports: [
    CommonModule,
    ConfereneceAdminRoutingModule
  ]
})
export class ConfereneceAdminModule { }
