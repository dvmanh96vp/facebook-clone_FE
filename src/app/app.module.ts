import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from 'src/services/interceptor-service';
import { HeaderComponent } from './layout/header/header.component';
import {PathModule} from "./shared/pipes/path/path.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        PathModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MyHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    exports: [
        HeaderComponent
    ]
})
export class AppModule {}
