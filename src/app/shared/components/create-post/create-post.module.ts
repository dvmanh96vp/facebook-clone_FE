import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreatePostComponent} from "./create-post.component";
import {PathModule} from "../../pipes/path/path.module";
import {LayoutModule} from "../../../layout/layout.module";



@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    PathModule,
    LayoutModule
  ],
  exports: [CreatePostComponent]
})
export class CreatePostModule { }
