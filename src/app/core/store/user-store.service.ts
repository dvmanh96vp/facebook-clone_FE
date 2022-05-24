import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  listFileMedia$ = new BehaviorSubject([]);
  constructor() { }

  handleSaveList(listFile: any[]): void {
    // @ts-ignore
    this.listFileMedia$.next(listFile);
  }

}
