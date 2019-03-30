import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  user: User;
  redirectUrl: string;
  token: string;
  bcryptPassword: string;

  private userUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { 

  }

  async login(username: string, password: string): Promise<User> {
    try {
      const token = btoa(`${username}:${password}`);
      httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${token}`);
      const user = await this.http.post<User>(`${this.userUrl}/login`, {}, httpOptions).toPromise();
      this.isLoggedIn = true;
      this.user = user;
      this.token = token;
      return Promise.resolve(this.user);
    }
    catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }

  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.isLoggedIn = false;
    this.user = null;
    this.token = null;
  }

  async register(user: User): Promise<User> {
    //  const token = btoa(`${username}:${password}`);
    //  this.bcryptPassword=btoa(password);
      console.log(this.bcryptPassword);
      httpOptions.headers =
        httpOptions.headers.set(
          'Authorization',
          'Basic YWRtaW46cGFzc3dvcmQ='
        );
      try {
          return this.http.post<User>(
            `${this.userUrl}/register`,
            user,
            httpOptions
          ).toPromise();
        } catch (e) {
          console.log('Hiba a regisztráláskor!', e);
          return null;
        }
      }

}
