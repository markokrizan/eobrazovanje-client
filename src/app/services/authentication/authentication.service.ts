import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly loginPath = `${environment.apiBaseUri}/auth/signin`;
  private readonly mePath = `${environment.apiBaseUri}/users/me`;

  constructor(
    private http: HttpClient,
    private jwtUtilsService: JwtUtilsService
    ) { }

  login(username: string, password: string): Observable<boolean> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginPath, JSON.stringify({ username, password }), { headers })
      .pipe(map((res: any) => {
        const token = res && res.accessToken;

        if (!token) {
          return false;
        }

        localStorage.setItem('currentUser', JSON.stringify({
          id: this.jwtUtilsService.getId(token),
          username,
          roles: this.jwtUtilsService.getRoles(token),
          token
        }));
        localStorage.setItem('userRole', this.jwtUtilsService.getRoles(token));

        return true;
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (this.getToken() !== '') {
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    } else {
      return undefined;
    }
  }

  getMe(): Observable<any> {
    return this.http.get<any>(this.mePath);
  }
}
