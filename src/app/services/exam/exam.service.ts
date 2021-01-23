import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private readonly examsPath = `${environment.apiBaseUri}/exams/`;
  private readonly examPath = `${environment.apiBaseUri}/exams`;


  constructor(
    private http: HttpClient,
  ) { }

  getExam( id: any): Observable<any> {
    return this.http.get<any>(this.examsPath + id);
  }

  getExams(): Observable<any> {
    return this.http.get<any>(this.examPath);
  }

  saveExam(id: any, term: any, course: any, location: any, examDate: any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.examPath,
      JSON.stringify({ id, term, course, location, examDate })
      , { headers }
    );
  }

  deleteExam( id: any): Observable<any> {
    return this.http.delete<any>(this.examsPath + id);
  }

}
