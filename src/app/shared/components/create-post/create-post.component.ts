import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {StorageKey} from "../../../core/storageKey";
import {PostService} from "../../../../services/post.service";
import {Subject, takeUntil} from "rxjs";
import {UserStoreService} from "../../../core/store/user-store.service";

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
  filePreview: any = [];
  desc = '';
  destroy$ = new Subject();
  @Input() id: string = '';
  @Output() onFile = new EventEmitter();
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

    this.postService.createArticle(formData).pipe(takeUntil(this.destroy$)).subscribe(res => {
      if(this.id && this.filePreview.length) {
        this.onFile.emit(this.filePreview)
      }
      this.fileUpload = [];
      this.filePreview = [];
      this.desc = '';
      this.visible = false;
    })
  }

  handleUploadFile($event: Event): void {
    // @ts-ignore
    const fileData = $event.target.files;
    if(fileData) {
      for (const file of fileData) {
        // @ts-ignore
        this.fileUpload.push(file);
        this.convertFileToBase64(file)
      }
    }
  }

  convertFileToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // @ts-ignore
      this.filePreview.push({src: reader.result as string, name: file.name, type: file.type})
    }
  }

  handleRemove(source: any): void {
    this.filePreview = this.filePreview.filter((item: any) => item.name !== source.name);
    this.fileUpload = this.fileUpload.filter((file: File) => file.name !== source.name);
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
