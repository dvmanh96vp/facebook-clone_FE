import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {CreatePostModule} from "../create-post/create-post.module";



@NgModule({
    declarations: [
        PostComponent
    ],
    exports: [
        PostComponent
    ],
    imports: [
        CommonModule, CreatePostModule
    ]
})
export class PostModule { }
