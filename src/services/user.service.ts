import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createUser(body: any) {
    return this.httpClient.post(environment.path + 'user/create', body);
  }

  getUserById(id:string) {
    return this.httpClient.get(environment.path + `user?user_id=${id}`);
  }

  updateUser(body: any) {
    return this.httpClient.post(environment + 'user/update', body);
  }

  login(body: any) {
    return this.httpClient.post(environment.path + 'user/login', body);
  }


  uploadImage(body: FormData) {
    return this.httpClient.post(environment.path + 'user/upload', body);
  }

  getMediaByUser(userId: string, page: number, size: number) {
    return this.httpClient.get(environment.path + `media/${userId}?page=${page}&size=${size}`);
  }

  requestFriend(body: any) {
    return this.httpClient.post(environment.path + 'user/request-friend', body)
  }

  acceptFriend(body: any) {
    return this.httpClient.post(environment.path + 'user/accept-friend', body)
  }
}
