import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public wrongUsernameOrPass:boolean;

  constructor(private authenticationService:AuthenticationService,
              private router: Router) {
    this.user = {};
    this.wrongUsernameOrPass = false;
   }

  ngOnInit() {
  }

  login():void{
    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn:boolean) => {
        if(loggedIn){
          this.router.navigate(['/']);          
        }
      });
  }
}

