import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  jsonName: string = 'admins';

  private url: string = `${environment.jsonApiUrl}/${this.jsonName}`;

  constructor(private http: HttpClient) {}

  getAdminByCredentials(dataObj: { [keys: string]: any }): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.url}?email=${dataObj['email']}`);
  }
}
