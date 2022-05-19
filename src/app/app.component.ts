import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader = true;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof  NavigationEnd)).subscribe((res: any) => {
      if(res?.urlAfterRedirects === '/' || res?.url === '/') {
        this.showHeader = false;
      } else  {
        this.showHeader = true
      }
    })
  }
}
