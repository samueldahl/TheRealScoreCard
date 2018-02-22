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

  constructor(private getCoursesService: GetCoursesService) { }

  getCourses(): void {
    this.getCoursesService.getCourses().subscribe(rawCourses => {
      this.courses = rawCourses.courses;
    });
  }

  ngOnInit() {
    this.getCourses();
  }

}
