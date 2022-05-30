import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {forkJoin, Subject, takeUntil} from "rxjs";
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
  userId = '';
  myUser: any;
  listFriend!: string[];
  listFollower!: string[];
  @ViewChild('input') inputElm!: ElementRef

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.userId = res.id;
      // @ts-ignore
      this.myUser = JSON.parse(localStorage.getItem(StorageKey.user))
      if (res.id !== this.myUser._id) {
        this.handleGetUserInfo(res.id)
      } else {
        this.user = this.myUser;
      }
    });
    this.handleGetInformation();
  }

  handleGetInformation():void {
    const listApi = [this.userService.getListFollower(this.myUser._id), this.userService.getListFriend(this.myUser._id)];
    forkJoin(listApi).pipe(takeUntil(this.destroy$)).subscribe(([listFollow, listFriend]) => {
      // @ts-ignore
      this.listFollower = listFollow.follower;
      // @ts-ignore
      this.listFriend= listFriend.friend
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
    file.append('userId', this.userId)
    if (type) {
      file.append('type', type);
    }
    if (files) {
      file.append('img', files)
    }
    this.userService.uploadImage(file).pipe(takeUntil(this.destroy$)).subscribe(res => {
      let userUpdate
      if(type) {
        // @ts-ignore
        userUpdate = Object.assign(JSON.parse(localStorage.getItem(StorageKey.user)), {avatar: `img/${files.name}`});
      } else {
        // @ts-ignore
        userUpdate = Object.assign(JSON.parse(localStorage.getItem(StorageKey.user)), {background: `img/${files.name}`});
      }
      localStorage.setItem(StorageKey.user, JSON.stringify(userUpdate));
      // @ts-ignore
      if(this.userId === JSON.parse(localStorage.getItem(StorageKey.user))._id) {
        // @ts-ignore
        this.user = JSON.parse(localStorage.getItem(StorageKey.user));
      }
      event.target.value = '';
    }, error => event.target.value = '')
  }


  handleAddFriend():void {
    const body = {
      idReq: this.userId,
      userId: this.myUser._id
    }
    this.userService.requestFriend(body).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.userService.getListFriend(this.myUser._id).pipe(takeUntil(this.destroy$)).subscribe(res => {
        // @ts-ignore
        this.listFriend= res.friend
      })
    })
  }

  handleAccept() {
    const body = {
      idAcc: this.userId,
      userId: this.myUser._id
    }

    this.userService.acceptFriend(body).pipe(takeUntil(this.destroy$)).subscribe(res => {})
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
