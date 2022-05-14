import { AccountDetailComponent } from './account-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostPrivateComponent} from "./post-private/post-private.component";

const routes: Routes = [
  {
    path: '',
    component: AccountDetailComponent,
    children: [
      {
        path:'',
        redirectTo: 'post-private',
        pathMatch: 'full'
      },
      {
        path: 'post-private',
        component: PostPrivateComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailRoutingModule {}
