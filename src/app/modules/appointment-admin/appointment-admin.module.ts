import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentAdminRoutingModule } from './appointment-admin-routing.module';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { FieldListComponent } from './components/field-list/field-list.component';
import { AppointmentAdminComponent } from './appointment-admin.component';


@NgModule({
  declarations: [CreateAppointmentComponent, AppointmentListComponent, FieldListComponent, AppointmentAdminComponent],
  imports: [
    CommonModule,
    AppointmentAdminRoutingModule
  ]
})
export class AppointmentAdminModule { }
