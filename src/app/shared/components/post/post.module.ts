import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post.component';
import {LayoutModule} from "../../../layout/layout.module";
import {CreatedTimeModule} from "../../pipes/created-time/created-time.module";
import {PathModule} from "../../pipes/path/path.module";
import {CreateCommentModule} from "../create-comment/create-comment.module";


@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule, LayoutModule, CreatedTimeModule, PathModule, CreateCommentModule
  ]
})
export class PostModule {
}
