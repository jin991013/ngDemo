import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusAdminRoutingModule } from './bus-admin-routing.module';
import { SetRouteComponent } from './components/set-route/set-route.component';
import { BusReleaseComponent } from './components/bus-release/bus-release.component';
import { BusListComponent } from './components/bus-list/bus-list.component';


@NgModule({
  declarations: [SetRouteComponent, BusReleaseComponent, BusListComponent],
  imports: [
    CommonModule,
    BusAdminRoutingModule
  ]
})
export class BusAdminModule { }
