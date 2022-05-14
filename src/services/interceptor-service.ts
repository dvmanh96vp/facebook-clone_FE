import { StorageKey } from './../app/core/storageKey';
import { AppService } from './app.service';
import { LoadingComponent } from '../app/shared/components/loading/loading.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog, private appStore: AppService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(StorageKey.token);

    this.dialog.open(LoadingComponent);
    this.appStore.controlLoading(true);
    let customReq = request;
    if (token) {
      customReq = request.clone({
        headers: request.headers.set('Authorization', token),
      });
    }
    return next.handle(customReq).pipe(
      finalize(() => {
        this.appStore.controlLoading(false);
      })
    );
  }
}
