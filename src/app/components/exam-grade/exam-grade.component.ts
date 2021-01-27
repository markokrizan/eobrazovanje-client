import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamGradeFeil, ExamGradePass, ExamRegistrationStatus, GradeType } from 'src/app/models/exam-grade';
import { ExamGradeService } from 'src/app/services/exam-grade/exam-grade.service';
import { NotificationService } from 'src/app/services/notification-service/notification-service';

@Component({
  selector: 'app-exam-grade',
  templateUrl: './exam-grade.component.html',
  // styleUrls: ['./exam-grade.component.css']
})
export class ExamGradeComponent implements OnInit {

  searchText;
  activeTab = 1;
  examGradeFeil: ExamGradeFeil;
  examGradePass: ExamGradePass;
  gradeType = GradeType;
  examGradeList; any;
  currentUser: any;
  dirty = false;

  selectedGrade: any;


  constructor(
    private examGradeService: ExamGradeService,
    private toastr: NotificationService,
    private route: Router
    ) {
    }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (this.currentUser.roles != 'ROLE_STUDENT') {
      this.getExamsGrade();
    } else {
      this.route.navigate(['']);
    }


  }

  changTab(activeTab: any) {
    this.activeTab = activeTab;
  }

  getExamsGrade() {
    this.examGradeService.getExamsGrade(this.currentUser.id).subscribe((resp) => {
        this.examGradeList = resp.content;
      }
    );
  }

  checkSaveStatus(grade: any) {
    if (this.selectedGrade !== undefined && this.selectedGrade !== null) {
      if (this.selectedGrade === this.gradeType.FIVE) {
        this.saveExamFail(grade);
      } else {
        this.saveExamPass(grade);
      }
    } else {
      this.toastr.showError('Select grade!');
    }
  }

  saveExamPass(gradePass: any) {
    const examRegistration = { 'id': gradePass.id};
    const exam = { 'id': gradePass.exam.id};
    const student = { 'id': gradePass.student.id};
    this.examGradeService.saveExamPass(exam, student, examRegistration, this.selectedGrade).subscribe(
      resp => {
        this.toastr.showSuccess('Successfully saved!');
        this.getExamsGrade();
        this.selectedGrade = undefined;
        this.dirty = false;
        sessionStorage.setItem('termFormDirty', JSON.stringify(this.dirty));
      }
    );
  }

  saveExamFail(gradeFail: any) {
    const exam = { 'id': gradeFail.exam.id};
    const student = { 'id': gradeFail.student.id};
    this.examGradeService.saveExamFail(gradeFail.id, exam, student, ExamRegistrationStatus.FAILED).subscribe(
      resp => {
        this.toastr.showSuccess('Successfully saved!');
        this.getExamsGrade();
        this.selectedGrade = undefined;
        this.dirty = false;
        sessionStorage.setItem('termFormDirty', JSON.stringify(this.dirty));
      }
    );
  }

}
