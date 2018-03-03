import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../get-courses.service';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course-selector',
  templateUrl: './course-selector.component.html',
  styleUrls: ['./course-selector.component.css']
})

export class CourseSelectorComponent implements OnInit {

  courses: any[];
  course: any;

  constructor(private getCoursesService: GetCoursesService, private courseService: CourseServiceService) { }

  getCourseInfo(id: number): void {
    if (id == '') {
      this.courseService.setCourse(undefined);
      this.course = undefined;
      return;
    }
    this.getCoursesService.getCourseInfo(id).subscribe(course => {
      this.course = course.course;
      // stores newly selected course in the course service
      this.courseService.setCourse(course.course);
      console.log(this.course);
    });
  }

  getCourses(id): void {
    if (id == '') {
      this.courses = undefined;
      return;
    }
    this.getCoursesService.getCourses().subscribe(rawCourses => {
      this.courses = rawCourses.courses;
      console.log(this.courses);
    });
  }

  ngOnInit() {
    this.getCourses();
  }

}
