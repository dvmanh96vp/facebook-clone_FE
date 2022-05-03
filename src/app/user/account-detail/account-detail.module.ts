import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './account-detail.component';
import { AccountDetailRoutingModule } from './account-detail-routing.module';



@NgModule({
  declarations: [
    AccountDetailComponent
  ],
  imports: [
    CommonModule, AccountDetailRoutingModule
  ]
})
export class AccountDetailModule { }
