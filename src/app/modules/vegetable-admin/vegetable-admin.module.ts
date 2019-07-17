import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegetableAdminRoutingModule } from './vegetable-admin-routing.module';
import { NewAddComponent } from './components/new-add/new-add.component';
import { VegetableListComponent } from './components/vegetable-list/vegetable-list.component';
import { VegetableReleaseComponent } from './components/vegetable-release/vegetable-release.component';
import { VegetableReleaseListComponent } from './components/vegetable-release-list/vegetable-release-list.component';
import { VegetableAppointmentListComponent } from './components/vegetable-appointment-list/vegetable-appointment-list.component';
import { VegetableAdminComponent } from './vegetable-admin.component';

@NgModule({
  declarations: [
    NewAddComponent,
    VegetableListComponent,
    VegetableReleaseComponent,
    VegetableReleaseListComponent,
    VegetableAppointmentListComponent,
    VegetableAdminComponent
  ],
  imports: [
    CommonModule,
    VegetableAdminRoutingModule
  ]
})
export class VegetableAdminModule { }
