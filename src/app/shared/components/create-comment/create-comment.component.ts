import { Component, OnInit } from '@angular/core';
import {StorageKey} from "../../../core/storageKey";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  avatar = '';
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.avatar = JSON.parse(localStorage.getItem(StorageKey.user)).avatar;
  }

}
