import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  readonly apiURL = 'http://192.168.1.42:5016/api/UserModels';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  formData: UserDetail = new UserDetail();
  list?: UserDetail[];

  postData() {
    console.log(this.formData);
    return this.http.post(this.apiURL, this.formData);
  }

  putData() {
    return this.http.put(`${this.apiURL}/${this.formData.id}`, this.formData);
  }

  // deleteData() {
  //   return;
  // }

  gerDataList() {
    this.http
      .get(this.apiURL)
      .toPromise()
      .then((res) => (this.list = res as UserDetail[]));
  }
}
