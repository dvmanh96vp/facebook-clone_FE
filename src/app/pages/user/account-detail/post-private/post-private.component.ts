import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../../services/user.service";
import {UserStoreService} from "../../../../core/store/user-store.service";

@Component({
  selector: 'app-post-private',
  templateUrl: './post-private.component.html',
  styleUrls: ['./post-private.component.scss']
})
export class PostPrivateComponent implements OnInit {
  destroy$ = new Subject();
  album!: string[];
  id = '';
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private userStoreSV: UserStoreService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.id = res.id;
      this.handleGetMedia(res.id)
    });

    this.userStoreSV.listFileMedia$.subscribe(res => {
      if(res.length) {
        res.forEach((item: any) => {
          this.album.push(`img/${item.name}`)
        })
      }
    })
  }

  handleGetMedia(userId: string, page: number = 1, size: number = 9) {
    // @ts-ignore
    this.userService.getMediaByUser(userId, page, size).subscribe((res: any) => {
      this.album = res.list
    })
  }

}
