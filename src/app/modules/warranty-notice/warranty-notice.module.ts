import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarrantyNoticeRoutingModule } from './warranty-notice-routing.module';
import { WarrantyClaimComponent } from './components/warranty-claim/warranty-claim.component';


@NgModule({
  declarations: [WarrantyClaimComponent],
  imports: [
    CommonModule,
    WarrantyNoticeRoutingModule
  ]
})
export class WarrantyNoticeModule { }
