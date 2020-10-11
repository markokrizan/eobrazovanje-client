import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student = {};

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getMe().subscribe(data => {
      this.student = data;
    });
  }

}
