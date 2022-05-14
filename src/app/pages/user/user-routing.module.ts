import { AccountPasswordModule } from './account-password/account-password.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUserModule } from './account-user/account-user.module';
import { AccountDetailModule } from './account-detail/account-detail.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./account-user/account-user.module').then(
        (m) => AccountUserModule
      ),
  },
  {
    path: 'password',
    loadChildren: () =>
      import('./account-password/account-password.module').then(
        (m) => AccountPasswordModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./account-detail/account-detail.module').then(
        (m) => AccountDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
