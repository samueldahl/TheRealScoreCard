import { Injectable } from '@angular/core';
import { CourseServiceService } from './course-service.service';

@Injectable()
export class NameListService {

  names: string[] = [];

  constructor(private courseService: CourseServiceService) {
    this.courseService.onCourseChange().subscribe((newCourse) => {
      this.names = [];
    });
  }

  addName(name: string): void {
    this.names.push(name);
  }

  getInstances(name: string): number {
    var out: number = 0;
    for (let check of this.names) {
      if (check == name) out++;
    }
    return out;
  }

  checkName(name: string): string {
    var instances: number = this.getInstances(name);
    var uniqueName = instances <= 1 ? name : name + ' #' + instances;
    return uniqueName;
  }

}
