import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './account-detail.component';
import { AccountDetailRoutingModule } from './account-detail-routing.module';
import {PathModule} from "../../../shared/pipes/path/path.module";
import { PostPrivateComponent } from './post-private/post-private.component';
import {PostModule} from "../../../shared/components/post/post.module";
import {CreatePostModule} from "../../../shared/components/create-post/create-post.module";



@NgModule({
  declarations: [
    AccountDetailComponent,
    PostPrivateComponent
  ],
    imports: [
        CommonModule, AccountDetailRoutingModule, PathModule, PostModule, CreatePostModule
    ]
})
export class AccountDetailModule { }
