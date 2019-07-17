import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarrantyClaimComponent } from './components/warranty-claim/warranty-claim.component';
import { WarrantyNoticeComponent } from './warranty-notice.component';

const routes: Routes = [
  {
    path: '', component: WarrantyNoticeComponent, children: [
      {
        path: 'warranty-claim', component: WarrantyClaimComponent
      },
      {
        path: '', redirectTo: 'warranty-claim'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarrantyNoticeRoutingModule { }
