import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [UserComponent, AdminComponent],
  imports: [
    CommonModule,
    UserAdminRoutingModule
  ]
})
export class UserAdminModule { }
