import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly studentPath = `${environment.apiBaseUri}/students/`;
  private readonly studentsPath = `${environment.apiBaseUri}/students`;


  constructor(
    private http: HttpClient,
  ) { }

  getStudent( id: any): Observable<any> {
    return this.http.get<any>(this.studentPath + id);
  }

  getStudents(): Observable<any> {
    return this.http.get<any>(this.studentsPath);
  }

  saveStudent(
      email: any, firstName: any, id: any, lastName: any, personalIdNumber: any, phoneNumber: any, schoolIdNumber: any, username: any
    )
  : Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.studentsPath,
      JSON.stringify({ email, firstName, id, lastName, personalIdNumber, phoneNumber, schoolIdNumber, username })
      , { headers }
    );
  }

  deleteStudent( id: any): Observable<any> {
    return this.http.delete<any>(this.studentPath + id);
  }

}
