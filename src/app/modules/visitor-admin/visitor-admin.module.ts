import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorAdminRoutingModule } from './visitor-admin-routing.module';
import { VisitorHistoryComponent } from './components/visitor-history/visitor-history.component';
import { VisitorAdminComponent } from './visitor-admin.component';

@NgModule({
  declarations: [VisitorHistoryComponent, VisitorAdminComponent],
  imports: [
    CommonModule,
    VisitorAdminRoutingModule
  ]
})
export class VisitorAdminModule { }
