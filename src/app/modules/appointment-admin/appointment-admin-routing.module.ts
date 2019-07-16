import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { FieldListComponent } from './components/field-list/field-list.component';

const routes: Routes = [
  {
    path: 'appointment-list', component: AppointmentListComponent
  },
  {
    path: 'create-appointment', component: CreateAppointmentComponent
  },
  {
    path: 'field-list', component: FieldListComponent
  },
  {
    path: '', redirectTo: 'create-appointment'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentAdminRoutingModule { }
