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

  getUser() {
    return this.httpClient.get(environment.path + '/user');
  }

  updateUser(body: any) {
    return this.httpClient.post(environment + 'user/update', body);
  }

  login(body: any) {
    return this.httpClient.post(environment.path + 'user/login', body);
  }
}
