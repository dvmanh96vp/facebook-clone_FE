import {Component, OnInit} from '@angular/core';
import {HeaderDropdown} from "../../core/constant";
import {StorageKey} from "../../core/storageKey";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow = '';
  typeDropdown = HeaderDropdown;
  user: any;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem(StorageKey.user));
  }

}
