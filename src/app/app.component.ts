import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eobrazovanje-client';
  loggedIn: Boolean = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router){
  }

  logout():void{
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }
  
}
