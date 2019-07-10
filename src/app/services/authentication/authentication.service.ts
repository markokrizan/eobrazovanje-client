import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';
import { environment } from '../../../environments/environment';
import Student from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly loginPath = `${environment.apiBaseUri}/auth/signin`;
  private readonly mePath = `${environment.apiBaseUri}/auth/me`;

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  login(username: string, password: string): Observable<boolean> {
    var headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginPath, JSON.stringify({ username, password }), { headers })
      .pipe(map((res: any) => {
        let token = res && res['accessToken'];
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ 
                                    id : this.jwtUtilsService.getId(token),
                                    username: username, 
                                    roles:this.jwtUtilsService.getRoles(token), 
                                    token: token 
                                  }));
          return true;
        } 
        else {
          return false;
        }
      }),
      catchError((error: any) => {
        if (error.status === 400) {
          return Observable.throw('Ilegal login');
        }
        else {
          return Observable.throw(error.json().error || 'Server error');
        }
      }))
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean{
    if(this.getToken()!='') return true;
    else return false;
  }

  getCurrentUser(){
    if(localStorage.currentUser){
      return JSON.parse(localStorage.currentUser);
    }
    else{
      return undefined;
    }
  }

  getMe():Observable<any> {
    return this.http.get<any>(this.mePath);
  }
}
