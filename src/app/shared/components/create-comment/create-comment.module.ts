import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCommentComponent} from "./create-comment.component";
import {LayoutModule} from "../../../layout/layout.module";


@NgModule({
  declarations: [
    CreateCommentComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    CreateCommentComponent
  ]
})
export class CreateCommentModule { }
