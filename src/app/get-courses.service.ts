import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class GetCoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Object> {
    return this.http.post('https://golf-courses-api.herokuapp.com/courses', {latitude: 40.296898, longitude:-111.694647, radius:50}, httpOptions);
  }

}
