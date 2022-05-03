import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
