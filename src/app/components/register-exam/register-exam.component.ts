import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamRegistrationService } from 'src/app/services/exam-registration/exam-registration.service';
import { NotificationService } from 'src/app/services/notification-service/notification-service';

@Component({
  selector: 'app-register-exam',
  templateUrl: './register-exam.component.html',
  // styleUrls: ['./register-exam.component.css']
})
export class RegisterExamComponent implements OnInit {

  searchText;
  activeTab = 1;
  examRegistrationList; any;
  currentUser: any;
  studentRole = false;
  dirty = false;


  constructor(
    private examRegistrationService: ExamRegistrationService,
    private toastr: NotificationService,
    private route: Router
    ) {
    }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (this.currentUser.roles == 'ROLE_STUDENT') {
      this.studentRole = true;
      this.getExamRegistrations();
    } else {
      this.route.navigate(['']);
    }

  }

  changTab(activeTab: any) {
    this.activeTab = activeTab;
  }

  getExamRegistrations() {
    this.examRegistrationService.getExamRegistable(this.currentUser.id).subscribe((resp) => {
        this.examRegistrationList = resp.content;
      }
    );
  }

  saveExamRegistration(id: any) {
    const exam = { 'id': id};
    const student = { 'id': Number(this.currentUser.id)};
    this.examRegistrationService.saveExamRegistration(exam, student).subscribe(
      resp => {
        this.toastr.showSuccess('Successfully registered!');
        this.getExamRegistrations();
        this.dirty = false;
        sessionStorage.setItem('termFormDirty', JSON.stringify(this.dirty));
      }
    );
  }

}
