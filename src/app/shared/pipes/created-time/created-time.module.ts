import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { CreatedTimePipe } from './created-time.pipe';



@NgModule({
  declarations: [
    CreatedTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CreatedTimePipe],
  providers: [DatePipe]
})
export class CreatedTimeModule { }
