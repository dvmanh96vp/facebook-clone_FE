import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {PathModule} from "../shared/pipes/path/path.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HeaderComponent, AvatarComponent],
  imports: [
    CommonModule, PathModule, RouterModule
  ],
  exports: [
    HeaderComponent, AvatarComponent
  ]
})
export class LayoutModule {
}
