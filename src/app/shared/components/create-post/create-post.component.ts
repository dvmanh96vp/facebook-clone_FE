import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageKey} from "../../../core/storageKey";
import {PostService} from "../../../../services/post.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnDestroy {
  user: any;
  visible = false;
  placeholder = "";
  fileUpload = [];
  desc = '';
  destroy$ = new Subject();
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem(StorageKey.user));
    this.placeholder = `${this.user.lastName}, bạn đang nghĩ gì thế?`;
  }

  handleCreateArticle() {
    const formData = new FormData();
    formData.append('desc', this.desc);
    formData.append('userId', this.user._id);
    if(this.fileUpload.length) {
      this.fileUpload.forEach((file: File) => {
        formData.append("file", file);
      })
    }

    this.postService.createArticle(formData).pipe(takeUntil(this.destroy$)).subscribe(res => console.log(res))
  }

  handleUploadFile($event: Event): void {
    // @ts-ignore
    const fileData = $event.target.files;
    if(fileData) {
      for (const file of fileData) {
        // @ts-ignore
        this.fileUpload.push(file);
      }
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
