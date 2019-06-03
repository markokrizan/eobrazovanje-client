import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { StudentComponent } from './components/student/student.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { GradesComponent } from './components/grades/grades.component';
import { ExamRegistrationsComponent } from './components/exam-registrations/exam-registrations.component';
import { RegisterExamComponent } from './components/register-exam/register-exam.component';
import { ExamRegistrationHistoryComponent } from './components/exam-registration-history/exam-registration-history.component';
import { ActiveTermComponent } from './components/active-term/active-term.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentItemComponent } from './components/document-item/document-item.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    LoginComponent,
    RegisterComponent,
    MenuItemComponent,
    StudentComponent,
    CoursesComponent,
    PaymentsComponent,
    GradesComponent,
    ExamRegistrationsComponent,
    RegisterExamComponent,
    ExamRegistrationHistoryComponent,
    ActiveTermComponent,
    DocumentsComponent,
    DocumentItemComponent,
    AddPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
