import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { GradesComponent } from './components/grades/grades.component';
import { ExamRegistrationsComponent } from './components/exam-registrations/exam-registrations.component';

const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'exam-registrations', component: ExamRegistrationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  





exports: [RouterModule]
})
export class AppRoutingModule { }
