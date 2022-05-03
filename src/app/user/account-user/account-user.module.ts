import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountUserComponent } from './account-user.component';
import { AccountUserRoutingModule } from './account-user-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import {
  MatDatepickerModule,
  MatDatepickerToggleIcon,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TrimValueModule } from 'src/app/shared/directives/trim-value/trim-value.module';
@NgModule({
  declarations: [AccountUserComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    AccountUserRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    TrimValueModule,
  ],
})
export class AccountUserModule {}
