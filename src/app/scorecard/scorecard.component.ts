import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
import { NgModel } from '@angular/forms';

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
  totalPar: number;
  totalYardage: number;
  constructor(private courseService: CourseServiceService) { }

  ngOnInit() {
  }

}
