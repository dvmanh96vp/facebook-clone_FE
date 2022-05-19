import { Component, OnInit } from '@angular/core';
import {StorageKey} from "../../../core/storageKey";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem(StorageKey.user))
  }

}
