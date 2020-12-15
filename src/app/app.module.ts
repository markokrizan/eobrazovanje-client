import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestTokenInjectorService } from './services/authentication/request-token-injector.service';
import {  GlobalErrorHandler } from './services/error-service/global-error-handler';
import { ServerErrorInterceptor } from './services/error-service/server-error-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatSnackBarModule} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ModelDialogComponent } from './components/model-dialog/model-dialog.component';
import { StudyProgramsComponent } from './components/study-programs/study-programs.component';

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
    AddPaymentComponent,
    HomeComponent,
    TeacherComponent,
    ModelDialogComponent,
    StudyProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgbModule,
    ReactiveFormsModule,
    MatTabsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTokenInjectorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    {
      provide : ErrorHandler,
      useClass: GlobalErrorHandler
    },
    DecimalPipe
  ],
  entryComponents: [ModelDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
