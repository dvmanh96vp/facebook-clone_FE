import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreatePostComponent} from "./create-post.component";
import {PathModule} from "../../pipes/path/path.module";
import {LayoutModule} from "../../../layout/layout.module";
import {DialogModule} from "../dialog/dialog.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    PathModule,
    LayoutModule,
    DialogModule,
    FormsModule
  ],
  exports: [CreatePostComponent]
})
export class CreatePostModule { }
