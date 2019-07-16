import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAddComponent } from './components/new-add/new-add.component';
import { VegetableAppointmentListComponent } from './components/vegetable-appointment-list/vegetable-appointment-list.component';
import { VegetableListComponent } from './components/vegetable-list/vegetable-list.component';
import { VegetableReleaseComponent } from './components/vegetable-release/vegetable-release.component';
import { VegetableReleaseListComponent } from './components/vegetable-release-list/vegetable-release-list.component';


const routes: Routes = [
  {
    path: 'new-add', component: NewAddComponent
  },
  {
    path: 'vegetable-appointment-list', component: VegetableAppointmentListComponent
  },
  {
    path: 'vegetable-list', component: VegetableListComponent
  },
  {
    path: 'vegetable-release', component: VegetableReleaseComponent
  },
  {
    path: 'vegetable-release-list', component: VegetableReleaseListComponent
  },
  {
    path: '', redirectTo: 'new-add'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegetableAdminRoutingModule { }
