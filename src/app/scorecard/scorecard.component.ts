import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
import { NgModel } from '@angular/forms';
import { FirebaseService } from '../firebase.service'

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
  scoreArray: any[] = [];
  scoreTotal: number = 0;

  constructor(private courseService: CourseServiceService,
  private firebaseService: FirebaseService) { }

  afterValuesFilled(): void {
    this.holes.forEach((item, index) => {
      this.scoreArray.push(0);
    });
    this.setScores();
  }

  setScores(): void {
    this.firebaseService.setScores({
      player: this.playerId,
      name: this.playerName,
      tee: this.teeType,
      scores: this.scoreArray
    });
    console.log(this.firebaseService.scores);
  }

  calculateTotalScore(): void {
    this.scoreTotal = 0;
    for (let score of this.scoreArray) {
      this.scoreTotal += parseInt(score);
    }
    this.setScores();
  }

  ngOnInit() {
  }

}
