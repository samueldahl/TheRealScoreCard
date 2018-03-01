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
    this.getCoursesService.getCourseInfo(id).subscribe(course => {
      this.course = course.course;
      // stores newly selected course in the course service
      this.courseService.setCourse(course.course);
      console.log(this.course);
    });
  }

  getCourses(): void {
    this.getCoursesService.getCourses().subscribe(rawCourses => {
      this.courses = rawCourses.courses;
      console.log(this.courses);
    });
  }

  ngOnInit() {
    this.getCourses();
  }

}
