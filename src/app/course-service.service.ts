import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceService {
  course: any;
  courseGotten: boolean = false;
  setCourse(newCourse): void {
    this.course = newCourse;
    this.courseGotten = true;
  }
  constructor() { }

}
 
