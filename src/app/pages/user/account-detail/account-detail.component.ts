import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {StorageKey} from "../../../core/storageKey";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  user: any;
  idUser = ''
  @ViewChild('input') inputElm!: ElementRef

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.idUser = res.id;
      // @ts-ignore
      const myUser = JSON.parse(localStorage.getItem(StorageKey.user))
      if (res.id !== myUser._id) {
        this.handleGetUserInfo(res.id)
      } else {
        this.user = myUser;
      }
    })
  }

  handleGetUserInfo(id: string) {
    this.userService.getUserById(id).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.user = res
    })
  }

  handleUpdateImg(event: any, type?: string): void {
    const files = event.target.files[0];

    const file = new FormData();
    if (type) {
      file.append('type', type);
    }
    if (files) {
      file.append('img', files)
    }
    this.userService.uploadImage(file).pipe(takeUntil(this.destroy$)).subscribe(res => {
      let user
      if(type) {
        // @ts-ignore
        user = Object.assign(JSON.parse(localStorage.getItem(StorageKey.user)), {avatar: `img/${files.name}`});
      } else {
        // @ts-ignore
        user = Object.assign(JSON.parse(localStorage.getItem(StorageKey.user)), {background: `img/${files.name}`});
      }
      localStorage.setItem(StorageKey.user, JSON.stringify(user));
      // @ts-ignore
      if(this.idUser === JSON.parse(localStorage.getItem(StorageKey.user))._id) {
        // @ts-ignore
        this.user = JSON.parse(localStorage.getItem(StorageKey.user));
      }
      event.target.value = '';
    }, error => event.target.value = '')
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}
