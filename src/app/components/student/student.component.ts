import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import Student from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = {};

  constructor(private authenticationService: AuthenticationService) { }

  filterStudent(userTypes){
    const studentTypes =  userTypes.filter(userType => userType.userType === "student");
    return studentTypes[0].userData;
  }

  ngOnInit() {
    this.authenticationService.getMe().subscribe(data => {
      this.student = this.filterStudent(data);
      debugger;
      console.log(data);
    });
  }

}
