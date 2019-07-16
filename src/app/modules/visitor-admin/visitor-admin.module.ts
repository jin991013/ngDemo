import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorAdminRoutingModule } from './visitor-admin-routing.module';
import { VisitorHistoryComponent } from './components/visitor-history/visitor-history.component';


@NgModule({
  declarations: [VisitorHistoryComponent],
  imports: [
    CommonModule,
    VisitorAdminRoutingModule
  ]
})
export class VisitorAdminModule { }
