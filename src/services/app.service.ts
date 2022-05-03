import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoading$ = new Subject();
  constructor() {}

  controlLoading(flg: boolean) {
    this.isLoading$.next(flg);
  }
}
