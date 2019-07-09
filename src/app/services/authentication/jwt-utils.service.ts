import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtUtilsService {

  constructor() { }

  decodePayload(token:string){
    let jwtData = token.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    return JSON.parse(decodedJwtJsonData)
  }

  getId(token:string){
    return this.decodePayload(token).sub;
  }

  getRoles(token:string){
    return this.decodePayload(token).roles.map(x => x.authority)||[];
  }
}
