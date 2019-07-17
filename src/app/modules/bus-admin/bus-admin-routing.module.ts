import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusReleaseComponent } from './components/bus-release/bus-release.component';
import { SetRouteComponent } from './components/set-route/set-route.component';
import { BusAdminComponent } from './bus-admin.component';

const routes: Routes = [
  {
    path: '', component: BusAdminComponent, children: [
      {
        path: 'bus-list', component: BusListComponent
      },
      {
        path: 'bus-release', component: BusReleaseComponent
      },
      {
        path: 'set-route', component: SetRouteComponent
      },
      {
        path: '', redirectTo: 'set-route'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusAdminRoutingModule { }
