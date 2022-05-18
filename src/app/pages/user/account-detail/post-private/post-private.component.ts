import { Component, OnInit } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-post-private',
  templateUrl: './post-private.component.html',
  styleUrls: ['./post-private.component.scss']
})
export class PostPrivateComponent implements OnInit {
  destroy$ = new Subject();
  album!: string[]
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.handleGetMedia(res.id)
    })
  }

  handleGetMedia(userId: string, page: number = 1, size: number = 9) {
    // @ts-ignore
    this.userService.getMediaByUser(userId, page, size).subscribe((res: any) => {
      this.album = res.list
    })
  }

}
