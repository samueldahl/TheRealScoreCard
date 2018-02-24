import { Component, OnInit } from '@angular/core';
import { GetCoursesService } from '../get-courses.service';
import { GolfCourse } from '../golf-course';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})

export class AddPanelComponent implements OnInit {

  courses: GolfCourse[];
  course: GolfCourse;

  constructor(private getCoursesService: GetCoursesService) { }

  getCourseInfo(id: number): void {
    this.getCoursesService.getCourseInfo(id).subscribe(course => {
      this.course = course.course;
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
