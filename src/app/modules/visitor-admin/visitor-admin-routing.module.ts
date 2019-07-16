import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorHistoryComponent } from './components/visitor-history/visitor-history.component';


const routes: Routes = [
  {
    path: 'visitor-history', component: VisitorHistoryComponent
  },
  {
    path: '', redirectTo: 'visitor-history'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorAdminRoutingModule { }
