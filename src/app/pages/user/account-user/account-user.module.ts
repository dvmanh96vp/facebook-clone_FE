import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountUserComponent } from './account-user.component';
import { AccountUserRoutingModule } from './account-user-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TrimValueModule } from 'src/app/shared/directives/trim-value/trim-value.module';
import {DialogModule} from "../../../shared/components/dialog/dialog.module";
@NgModule({
  declarations: [AccountUserComponent],
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
    DialogModule,
  ],
})
export class AccountUserModule {}
