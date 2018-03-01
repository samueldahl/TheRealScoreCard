import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  playerId: number;
  playerName: string;
  holes: any[];
  teeType: number;
  constructor(private courseService: CourseServiceService) { }

  ngOnInit() {
  }

}
