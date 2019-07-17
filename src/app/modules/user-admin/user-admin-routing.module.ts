import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { UserAdminComponent } from './user-admin.component';

const routes: Routes = [
  {
    path: '', component: UserAdminComponent, children: [
      {
        path: 'admin', component: AdminComponent
      },
      {
        path: 'user', component: UserComponent
      },
      {
        path: '', redirectTo: 'user'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }
