import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createArticle(body: any) {
    return this.http.post(environment.path + 'post/create', body);
  }

  getListArticle(id: string) {
    return this.http.get(environment.path+ `post/${id}`)
  }
}
