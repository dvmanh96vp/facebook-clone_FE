import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../../../core/models/article.model";
import {PostService} from "../../../../services/post.service";
import {Subject, takeUntil} from "rxjs";
import {StorageKey} from "../../../core/storageKey";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data!: Article;
  @Output() eventDelete = new EventEmitter();
  destroy$ = new Subject();
  userId = '';
  liked = false;
  actionCmt = false;
  isEdit = false;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.userId = JSON.parse(localStorage.getItem(StorageKey.user))._id;
    this.liked = this.data.likes.includes(this.userId);
  }

  handleDelete():void {
    this.postService.deleteArticle({id: this.data._id}).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.eventDelete.emit(this.data._id)
    })
  }

  handleUpdate(type: string): void {
    const body = {
      id: this.data._id,
      userId: this.userId,
    }

    if(type === 'desc') {
      Object.assign(body, {desc: 'test'})
    } else if(type === 'like') {
      Object.assign(body, {like: 'liked'})
    } else {

    }
    this.postService.updateArticle(body).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.liked =!this.liked;
    })
  }

  handleEdit(): void {
    this.isEdit = true;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }

}
