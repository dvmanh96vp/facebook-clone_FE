import { AccountPasswordRoutingModule } from './account-password-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPasswordComponent } from './account-password.component';



@NgModule({
  declarations: [
    AccountPasswordComponent
  ],
  imports: [
    CommonModule, AccountPasswordRoutingModule
  ]
})
export class AccountPasswordModule { }
