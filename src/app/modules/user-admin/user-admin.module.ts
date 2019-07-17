import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserAdminComponent } from './user-admin.component';

@NgModule({
  declarations: [UserComponent, AdminComponent, UserAdminComponent],
  imports: [
    CommonModule,
    UserAdminRoutingModule
  ]
})
export class UserAdminModule { }
