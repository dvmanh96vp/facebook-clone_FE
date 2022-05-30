import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../../services/user.service";
import {PostService} from "../../../../../services/post.service";
import {Article} from "../../../../core/models/article.model";

@Component({
  selector: 'app-post-private',
  templateUrl: './post-private.component.html',
  styleUrls: ['./post-private.component.scss']
})
export class PostPrivateComponent implements OnInit {
  destroy$ = new Subject();
  album!: any[];
  id = '';
  listPost!: Article[];
  listFriend!: string[];
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.id = res.id;
      this.handleGetMedia(res.id);
      this.handleGetListArticle(res.id);
      this.handleGetListFriend(res.id);
    });
  }

  handleAddMedia($event: any) {
    if($event.length) {
      $event.forEach((item: any) => {
        this.album.push({path:`img/${item.name}`, type: $event.type})
      })
    }
  }

  handleGetListFriend(id:string) {
    this.userService.getListFriend(id).pipe(takeUntil(this.destroy$)).subscribe(res => {
      // @ts-ignore
      this.listFriend= res.friend
    })
  }

  handleGetMedia(userId: string, page: number = 1, size: number = 9) {
    // @ts-ignore
    this.userService.getMediaByUser(userId, page, size).subscribe((res: any) => {
      this.album = res.list
    })
  }

  handleGetListArticle(id: string) {
    // @ts-ignore
    this.postService.getListArticle(id).pipe(takeUntil(this.destroy$)).subscribe((res: Article[]) => this.listPost = res)
  }

  handleRemoveArticle(id: string) {
    this.listPost = this.listPost.filter((item: Article) => item._id !== id);
  }

}
