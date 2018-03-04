import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CourseServiceService {
  course: any;
  course$: Observable<any>;
  courseSubject: Subject<any>;
  courseGotten: boolean = false;
  setCourse(newCourse): void {
    this.course = newCourse;
    this.courseGotten = true;
    this.courseSubject.next(newCourse);
  }
  onCourseChange(): Observable<any> {
    return this.course$;
  }
  constructor() {
    this.courseSubject = new Subject<any>();
    this.course$ = this.courseSubject.asObservable();
  }

}
