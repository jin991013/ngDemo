import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home', loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'appointment-admin', loadChildren: './modules/appointment-admin/appointment-admin.module#AppointmentAdminModule'
  },
  {
    path: 'visitor-admin', loadChildren: './modules/visitor-admin/visitor-admin.module#VisitorAdminModule'
  },
  {
    path: 'conferenece-admin', loadChildren: './modules/conferenece-admin/conferenece-admin.module#ConfereneceAdminModule'
  },
  {
    path: 'warranty-notice', loadChildren: './modules/warranty-notice/warranty-notice.module#WarrantyNoticeModule'
  },
  {
    path: 'vegetable-admin', loadChildren: './modules/vegetable-admin/vegetable-admin.module#VegetableAdminModule'
  },
  {
    path: 'bus-admin', loadChildren: './modules/bus-admin/bus-admin.module#BusAdminModule'
  },
  {
    path: 'complaint-suggestions', loadChildren: './modules/complaint-suggestions/complaint-suggestions.module#ComplaintSuggestionsModule'
  },
  {
    path: 'user-admin', loadChildren: './modules/user-admin/user-admin.module#UserAdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
